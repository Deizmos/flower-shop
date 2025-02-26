import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Button, InputNumber, message } from "antd";
import { addToCart } from "../store/cartSlice";
import carouselImage1 from "../assets/carousel-image.jpg";
import "../styles/productPageStyles.css";
import RecommendedItems from "../components/RecommendedItems";

const { Title, Paragraph } = Typography;

const ProductPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) =>
        state.products.products.find((item) => item.id === Number(id))
    );

    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return <Title level={2}>Товар не найден</Title>;
    }

    const handleAddToCart = () => {
        if (quantity <= 0) {
            message.warning("Количество товара должно быть больше 0.");
            return;
        }

        // Проверка, чтобы количество не превышало доступное в наличии
        if (quantity > product.quantity) {
            message.warning(`В наличии только ${product.quantity} шт.`);
            setQuantity(product.quantity); // Ограничиваем максимальное количество
            return;
        }

        // Отправка данных в корзину
        dispatch(addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity
        }));

        // Уведомление
        message.success(`${quantity} ${product.name} добавлено в корзину`);
    };

    return (
        <div className="product-page">
            <img className="product-page-img" alt={product.name} src={carouselImage1}/>
            <Title className="product-page-title" level={3}>{product.name}</Title>
            <Paragraph className="product-page-description">{product.description}</Paragraph>
            <Title className="product-page-price" level={4}>{product.price}₽</Title>
            <RecommendedItems/>
            <div className="button-container">
                <div className="quantity-selector">
                    <InputNumber
                        min={1}
                        max={product.quantity}
                        value={quantity}
                        onChange={setQuantity}
                    />
                </div>
                <div className="add-to-cart-container">
                    <Link to="/">
                        <Button
                            type="primary"
                            onClick={handleAddToCart}
                            size="large"
                            className="add-to-cart-button"
                        >
                            Добавить в корзину ({quantity * product.price}₽)
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;

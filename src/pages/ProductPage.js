import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Button, InputNumber, message } from "antd";
import {LeftOutlined, MinusOutlined, PlusOutlined} from "@ant-design/icons";
import { addToCart } from "../store/cartSlice";
import carouselImage1 from "../assets/carousel-image.jpg";
import "../styles/productPageStyles.css";
import RecommendedItems from "../components/RecommendedItems";

const { Title, Paragraph } = Typography;

const ProductPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
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

        if (quantity > product.quantity) {
            message.warning(`В наличии только ${product.quantity} шт.`);
            setQuantity(product.quantity);
            return;
        }

        dispatch(addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity
        }));

        message.success(`${quantity} ${product.name} добавлено в корзину`);
    };
    const goBack = () => {
        navigate("/"); // Перенаправляем на главную страницу
    };

    // Функции для изменения количества
    const increaseQuantity = () => {
        setQuantity((prev) => Math.min(prev + 1, product.quantity));
    };

    const decreaseQuantity = () => {
        setQuantity((prev) => Math.max(prev - 1, 1));
    };

    return (
        <div className="product-page">
            <Button
                className="arrow-back"
                icon={<LeftOutlined />}
                onClick={goBack}
                type="text"
            />
            <img className="product-page-img" alt={product.name} src={product.image}/>
            <Title className="product-page-title" level={3}>{product.name}</Title>
            <Paragraph className="product-page-description">{product.description}</Paragraph>
            <Title className="product-page-price" level={4}>{product.price}₽</Title>
            <RecommendedItems/>
            <div className="button-container">
                <div className="quantity-selector">
                    <button
                        className="quantity-button"
                        onClick={decreaseQuantity}
                        disabled={quantity <= 1}
                    >
                        –
                    </button>

                    <InputNumber
                        min={1}
                        max={product.quantity}
                        value={quantity}
                        onChange={setQuantity}
                        className="custom-input-number"
                    />

                    <button
                        className="quantity-button"
                        onClick={increaseQuantity}
                        disabled={quantity >= product.quantity}
                    >
                        +
                    </button>
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

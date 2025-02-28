import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {Button, Typography,  message} from "antd";
import { removeFromCart, clearCart } from "../store/cartSlice";
import {  useNavigate } from "react-router-dom";
import { LeftOutlined} from "@ant-design/icons";
import "../styles/CartPageStyles.css";
import RecommendedItems from "../components/RecommendedItems";

const { Title } = Typography;

const CartPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'success',
            content: `Заказ оформлен`,
            duration: 2,
        });
    };
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const navigate = useNavigate();
    const [isDelivery, setIsDelivery] = useState(true);

    const handlerCart = () => {
        success()
        setTimeout(() => {
            navigate("/")
            dispatch(clearCart())
        }, 2000)
    }
    const goBack = () => {
        navigate("/");
    };

    const handleDeliveryClick = () => {
        setIsDelivery(true);
    };

    const handlePickupClick = () => {
        setIsDelivery(false);
    };

    return (
        <>
            {contextHolder}
        <div className="cart-container">
            <Button
                className="arrow-back"
                icon={<LeftOutlined />}
                onClick={goBack}
                type="text"
            />
            <Title className="cart-page-title" level={2}>Корзина</Title>

            <div className="cart-button-container">
                <Button
                    className={`toggle-button ${isDelivery ? "active" : ""} left`}
                    onClick={handleDeliveryClick}
                >
                    Доставка
                </Button>
                <Button
                    className={`toggle-button ${!isDelivery ? "active" : ""} right`}
                    onClick={handlePickupClick}
                >
                    Самовывоз
                </Button>
            </div>

            <div className="delivery-info">
                {isDelivery ? (
                    <div className="delivery-component">
                        <p>Здесь будет информация о доставке...</p>
                    </div>
                ) : (
                    <div className="pickup-component">
                        <p>Здесь будет информация о самовывозе...</p>
                    </div>
                )}
            </div>

            {cartItems.length > 0 ? (
                <>
                    <div className="cart-head" >
                        <p className="cart-total-item" >В корзине: </p>
                        <Button type="primary" danger onClick={() => dispatch(clearCart())}>
                            Очистить корзину
                        </Button>
                    </div>
                    <div className="cart-items-container">
                        {cartItems.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <img src={item.image} alt={item.name}/>
                                <div className="cart-item-details">
                                    <Title level={5} className="cart-item-name">{item.name}</Title>
                                    <p className="cart-item-price">{item.price}₽</p>
                                    <p className="cart-item-quantity">Количество: {item.quantity}</p>
                                </div>
                                <Button danger onClick={() => dispatch(removeFromCart(item.id))}>
                                    Удалить
                                </Button>
                            </div>
                        ))}
                    </div>
                    <div className="cart-promo">
                        <input type="text" placeholder="Введите промокод"/>
                        <div className='promo-button'>Применить</div>
                    </div>
                    <RecommendedItems/>
                    <div className="cart-total-amount" onClick={handlerCart}> Оформить заказ: {totalAmount} р</div>
                </>
            ) : (
                <Title level={4}>Корзина пуста</Title>
            )}
        </div>
        </>
    );
};

export default CartPage;

import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Typography, List } from "antd";
import { removeFromCart, clearCart } from "../store/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import {BorderInnerOutlined, LeftOutlined} from "@ant-design/icons";
import "../styles/CartPageStyles.css";
import RecommendedItems from "../components/RecommendedItems";

const { Title } = Typography;

const CartPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const navigate = useNavigate();
    console.log("cartItems",cartItems)
    const [isDelivery, setIsDelivery] = useState(true); // Состояние для выбора между доставкой и самовывозом

    const goBack = () => {
        navigate("/"); // Перенаправляем на главную страницу
    };

    // Функция для обработки изменения состояния
    const handleDeliveryClick = () => {
        setIsDelivery(true);
    };

    const handlePickupClick = () => {
        setIsDelivery(false);
    };

    return (
        <div className="cart-container">
            <Button
                className="arrow-back"
                icon={<LeftOutlined />}
                onClick={goBack}
                type="text"
            />
            <Title className="cart-page-title" level={2}>Корзина</Title>

            {/* Кнопки для переключения между доставкой и самовывозом */}
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

            {/* Компонент, который отображается в зависимости от выбора */}
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
                    <div className="cart-total-amount"> Оформить заказ: {totalAmount} р</div>
                </>
            ) : (
                <Title level={4}>Корзина пуста</Title>
            )}
        </div>
    );
};

export default CartPage;

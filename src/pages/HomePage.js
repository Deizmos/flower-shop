import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button } from "antd";
import ProductCategory from "../components/ProductCategory";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";

import "../styles/homePageStyles.css";

const HomePage = () => {
    const [activeCategory, setActiveCategory] = useState(null); // Для отслеживания активной категории при скролле
    const [clickedCategory, setClickedCategory] = useState(null); // Для отслеживания категории, на которую был клик

    const products = useSelector((state) => state.products.products);
    const categories = useSelector((state) => state.products.categories);
    const cartItems = useSelector((state) => state.cart.items);
    const totalAmount = useSelector((state) => state.cart.totalAmount);

    // Рефы для секций категорий
    const categoryRefs = {
        "Розы": useRef(null),
        "Лилии": useRef(null),
        "Календула": useRef(null),
        "Тюльпаны": useRef(null),
        "Хризантемы": useRef(null),
    };

    const groupedProducts = categories.reduce((acc, category) => {
        acc[category] = products.filter((product) => product.category === category);
        return acc;
    }, {});

    const scrollToCategory = (category) => {
        setClickedCategory(category); // Сохраняем кликнутую категорию
        setActiveCategory(category); // Скроллим к категории
        categoryRefs[category].current.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    // 🎯 Используем IntersectionObserver для отслеживания видимости секций
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const category = entry.target.dataset.category;
                        // Обновляем активную категорию при скролле
                        setActiveCategory(category);
                    }
                });
            },
            {
                root: null,
                threshold: 0.6, // Считаем категорию активной, если видно 60% её секции
            }
        );

        Object.values(categoryRefs).forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            Object.values(categoryRefs).forEach((ref) => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, []);

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <>
            <div className="homepage-centar-container">
                <div className="category-container">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            type="default"
                            onClick={() => scrollToCategory(category)} // Клик по кнопке
                            className={`category-button ${activeCategory === category ? "active" : ""}`}
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                {categories.map((category) => (
                    <div key={category} ref={categoryRefs[category]} data-category={category}>
                        <ProductCategory categoryName={category} products={groupedProducts[category]} />
                    </div>
                ))}
            </div>

            {cartItems.length > 0 && (
                <Link to="/cart">
                    <div className="cart-button">
                        <ShoppingCartOutlined className="cart-icon" />
                        <div>
                            <div className="cart-amount">{totalAmount} сум</div>
                            <div className="cart-total">{totalItems} товар</div>
                        </div>
                    </div>
                </Link>
            )}
        </>
    );
};

export default HomePage;

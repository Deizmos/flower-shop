import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Button } from "antd";
import ProductCategory from "../components/ProductCategory";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";


import "../styles/homePageStyles.css";

const HomePage = () => {
    const [activeCategory, setActiveCategory] = useState(null);
    const products = useSelector((state) => state.products.products);
    const categories = useSelector((state) => state.products.categories);
    const cartItems = useSelector((state) => state.cart.items);
    const totalAmount = useSelector((state) => state.cart.totalAmount);

    const roseRef = useRef(null);
    const lilyRef = useRef(null);
    const calendulaRef = useRef(null);
    const tulipRef = useRef(null);
    const chrysanthemumRef = useRef(null);

    const groupedProducts = categories.reduce((acc, category) => {
        acc[category] = products.filter((product) => product.category === category);
        return acc;
    }, {});

    const scrollToCategory = (category) => {
        setActiveCategory(category);
        switch (category) {
            case "Розы":
                roseRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
                break;
            case "Лилии":
                lilyRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
                break;
            case "Календула":
                calendulaRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
                break;
            case "Тюльпаны":
                tulipRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
                break;
            case "Хризантемы":
                chrysanthemumRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
                break;
            default:
                break;
        }
    };

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className="homepage-container">
            {/*<div className="carousel-container">*/}
            {/*    <Carousel*/}
            {/*        autoplay*/}
            {/*        infinite*/}
            {/*    >*/}
            {/*        <div>*/}
            {/*            <img src={Image15} alt="Slide 1" className="carousel-image" />*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <img src={Image16} alt="Slide 2" className="carousel-image" />*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <img src={Image17} alt="Slide 3" className="carousel-image" />*/}
            {/*        </div>*/}
            {/*    </Carousel>*/}
            {/*</div>*/}
            <div className="homepage-centar-container">
            <div className="category-container">
                {categories.map((category) => (
                    <Button
                        key={category}
                        type="default"
                        onClick={() => scrollToCategory(category)}
                        className={`category-button ${activeCategory === category ? 'active' : ''}`}
                    >
                        {category}
                    </Button>
                ))}
            </div>

            <div ref={roseRef}>
                <ProductCategory categoryName="Розы" products={groupedProducts["Розы"]} />
            </div>
            <div ref={lilyRef}>
                <ProductCategory categoryName="Лилии" products={groupedProducts["Лилии"]} />
            </div>
            <div ref={calendulaRef}>
                <ProductCategory categoryName="Календула" products={groupedProducts["Календула"]} />
            </div>
            <div ref={tulipRef}>
                <ProductCategory categoryName="Тюльпаны" products={groupedProducts["Тюльпаны"]} />
            </div>
            <div ref={chrysanthemumRef}>
                <ProductCategory categoryName="Хризантемы" products={groupedProducts["Хризантемы"]} />
            </div>
            </div>
            {cartItems.length > 0 && (
                <Link to="/cart">
                    <div className="cart-button">
                        <ShoppingCartOutlined className="cart-icon" />
                        <div>
                            <div className="cart-amount">{totalAmount} ₽</div>
                            <div className="cart-total">{totalItems} товар</div>
                        </div>
                    </div>
                </Link>
            )}
        </div>
    );
};

export default HomePage;

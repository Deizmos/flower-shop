import React from "react";
import {  Row, Col } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

import "../styles/ProductCategoryStyles.css";

const ProductCategory = ({ categoryName, products }) => {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart({
            id: product.id,
            name: product.name,
            price: product.price
        }));
    };

    return (
        <div className="product-container">
            <h3>{categoryName}</h3>
            <Row className="product-row" gutter={[16, 16]}>
                {products.map((product) => (
                    <Col key={product.id} xs={12} sm={12} md={12} lg={12}>
                        <Link to={`/product/${product.id}`}>
                        <div>
                            <img className="product-img" alt={product.name} src={product.image} />
                            <p className="product-name">{product.name}</p>
                            <p className="product-price">{product.price} ₽ </p>
                        </div>
                        </Link>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ProductCategory;

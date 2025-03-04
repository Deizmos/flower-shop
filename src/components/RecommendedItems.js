import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import "../styles/RecommendedItems.css";
import {message} from "antd";

const RecommendedItems = () => {
    const additionalItems = useSelector((state) => state.products.additionalItems);
    const dispatch = useDispatch();
    const [messageApi, contextHolder] = message.useMessage();
    const success = (item) => {
        messageApi.open({
            type: 'success',
            content: `Товар ${item.name} добавлен в карзину`,
            duration: 2,
        });
    };

    const handleAddToCart = (item) => {
        success(item)
        dispatch(
            addToCart({
                id: item.id,
                name: item.name,
                price: item.price,
                image: item.image,
                quantity: 1,
            })
        );
    };

    return (
        <>
            {contextHolder}
        <div className="recommended-container">
            <h2 className="recommended-title">Может заинтересовать</h2>
            <div className="recommended-list">
                {additionalItems.map((item) => (
                    <div
                        key={item.id}
                        className="recommended-item"
                        onClick={() => handleAddToCart(item)}
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="recommended-image"
                        />
                        <div className="recommended-info">
                            <div className="recommended-name-container">
                                <p className="recommended-name">{item.name}</p>
                                <p className="recommended-description">{item.description}</p>
                            </div>
                            <p className="recommended-price">{item.price}сум</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default RecommendedItems;

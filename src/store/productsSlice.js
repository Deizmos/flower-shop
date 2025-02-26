import { createSlice } from "@reduxjs/toolkit";

import redRoses from "../assets/Лилии.jpg";

const initialState = {
    categories: ["Розы", "Календула", "Лилии", "Тюльпаны", "Хризантемы"],
    products: [
        { id: 1, name: "Красные розы", category: "Розы", price: 1500, description: "Классический букет", quantity: 10, image: "/images/1.jpg" },
        { id: 2, name: "Белые розы", category: "Розы", price: 1600, description: "Элегантные белые розы", quantity: 5, image: "/images/2.jpg" },
        { id: 3, name: "Розовые розы", category: "Розы", price: 1550, description: "Нежные розовые розы", quantity: 8, image: "/images/3.jpg" },
        { id: 4, name: "Желтые розы", category: "Розы", price: 1570, description: "Яркие желтые розы", quantity: 6, image: "/images/4.jpg" },
        { id: 5, name: "Белые лилии", category: "Лилии", price: 1200, description: "Ароматные лилии", quantity: 8, image: "/images/5.jpg" },
        { id: 6, name: "Оранжевые лилии", category: "Лилии", price: 1250, description: "Яркие оранжевые лилии", quantity: 6, image: "/images/6.jpg" },
        { id: 7, name: "Красные лилии", category: "Лилии", price: 1300, description: "Традиционные красные лилии", quantity: 7, image: "/images/7.jpg" },
        { id: 8, name: "Розовые лилии", category: "Лилии", price: 1280, description: "Нежные розовые лилии", quantity: 9, image: "/images/8.jpg" },
        { id: 9, name: "Оранжевая календула", category: "Календула", price: 900, description: "Яркие цветы", quantity: 12, image: "/images/9.jpg" },
        { id: 10, name: "Желтая календула", category: "Календула", price: 950, description: "Солнечные желтые цветы", quantity: 10, image: "/images/10.jpg" },
        { id: 11, name: "Красная календула", category: "Календула", price: 920, description: "Красивые красные цветы", quantity: 14, image: "/images/11.jpg" },
        { id: 12, name: "Фиолетовая календула", category: "Календула", price: 960, description: "Редкая фиолетовая календула", quantity: 5, image: "/images/12.jpg" },
        { id: 13, name: "Желтые тюльпаны", category: "Тюльпаны", price: 1100, description: "Весенний букет", quantity: 15, image: "/images/13.jpg" },
        { id: 14, name: "Красные тюльпаны", category: "Тюльпаны", price: 1150, description: "Яркие красные тюльпаны", quantity: 9, image: "/images/14.jpg" },
        { id: 15, name: "Белые тюльпаны", category: "Тюльпаны", price: 1200, description: "Нежные белые тюльпаны", quantity: 7, image: "/images/15.jpg" },
        { id: 16, name: "Розовые тюльпаны", category: "Тюльпаны", price: 1180, description: "Нежные розовые тюльпаны", quantity: 6, image: "/images/16.jpg" },
        { id: 17, name: "Хризантемы микс", category: "Хризантемы", price: 1300, description: "Разноцветные хризантемы", quantity: 7, image: "/images/17.jpg" },
        { id: 18, name: "Белые хризантемы", category: "Хризантемы", price: 1350, description: "Нежные белые хризантемы", quantity: 8, image: "/images/18.jpg" },
        { id: 19, name: "Красные хризантемы", category: "Хризантемы", price: 1400, description: "Яркие красные хризантемы", quantity: 6, image: "/images/19.jpg" },
        { id: 20, name: "Желтые хризантемы", category: "Хризантемы", price: 1380, description: "Солнечные желтые хризантемы", quantity: 9, image: "/images/20.jpg" },
    ],
    additionalItems: [
        { id: 21, name: "Красная лента", price: 200, description: "Яркая красная лента для упаковки", quantity: 50, image: redRoses },
        { id: 22, name: "Зеленая лента", price: 180, description: "Стильная зеленая лента", quantity: 30, image: redRoses },
        { id: 23, name: "Подарочная упаковка", price: 350, description: "Роскошная подарочная упаковка", quantity: 20, image: redRoses },
        { id: 24, name: "Мешок для подарков", price: 220, description: "Элегантный мешок для подарков", quantity: 15, image: redRoses },
        { id: 25, name: "Голубая лента", price: 190, description: "Нежная голубая лента", quantity: 40, image: redRoses },
        { id: 26, name: "Прозрачная упаковка", price: 300, description: "Прозрачная упаковка для букетов", quantity: 25, image: redRoses },
        { id: 27, name: "Бежевый мешок для подарков", price: 230, description: "Нежный бежевый мешок", quantity: 12, image: redRoses },
        { id: 28, name: "Серебристая лента", price: 210, description: "Элегантная серебристая лента", quantity: 30, image: redRoses },
    ],
};



const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
});

export default productsSlice.reducer;

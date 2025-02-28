import { createSlice } from "@reduxjs/toolkit";

import Image1 from "../assets/1.jpeg";
import Image2 from "../assets/2.jpeg";
import Image3 from "../assets/3.jpeg";
import Image4 from "../assets/4.jpeg";
import Image5 from "../assets/5.jpeg";
import Image6 from "../assets/6.jpeg";
import Image7 from "../assets/7.jpeg";
import Image8 from "../assets/8.jpeg";
import Image9 from "../assets/9.jpeg";
import Image10 from "../assets/10.jpeg";
import Image11 from "../assets/11.jpeg";
import Image12 from "../assets/12.jpeg";
import Image13 from "../assets/13.jpeg";
import Image14 from "../assets/14.jpeg";
import Image15 from "../assets/15.jpeg";
import Image16 from "../assets/16.jpeg";
import Image17 from "../assets/17.jpeg";
import Image18 from "../assets/18.jpeg";
import Image19 from "../assets/19.jpeg";
import Image20 from "../assets/20.jpeg";
import redRoses from "../assets/Лилии.jpg";

const initialState = {
    categories: ["Розы", "Календула", "Лилии", "Тюльпаны", "Хризантемы"],
    products: [
        { id: 1, name: "Красные розы", category: "Розы", price: 1500, description: "Классический букет", quantity: 10, image: Image1 },
        { id: 2, name: "Белые розы", category: "Розы", price: 1600, description: "Элегантные белые розы", quantity: 5, image: Image2 },
        { id: 3, name: "Розовые розы", category: "Розы", price: 1550, description: "Нежные розовые розы", quantity: 8, image: Image3 },
        { id: 4, name: "Желтые розы", category: "Розы", price: 1570, description: "Яркие желтые розы", quantity: 6, image: Image4 },
        { id: 5, name: "Белые лилии", category: "Лилии", price: 1200, description: "Ароматные лилии", quantity: 8, image: Image5 },
        { id: 6, name: "Оранжевые лилии", category: "Лилии", price: 1250, description: "Яркие оранжевые лилии", quantity: 6, image: Image6 },
        { id: 7, name: "Красные лилии", category: "Лилии", price: 1300, description: "Традиционные красные лилии", quantity: 7, image: Image7 },
        { id: 8, name: "Розовые лилии", category: "Лилии", price: 1280, description: "Нежные розовые лилии", quantity: 9, image: Image8 },
        { id: 9, name: "Оранжевая календула", category: "Календула", price: 900, description: "Яркие цветы", quantity: 12, image: Image9 },
        { id: 10, name: "Желтая календула", category: "Календула", price: 950, description: "Солнечные желтые цветы", quantity: 10, image: Image10 },
        { id: 11, name: "Красная календула", category: "Календула", price: 920, description: "Красивые красные цветы", quantity: 14, image: Image11 },
        { id: 12, name: "Фиолетовая календула", category: "Календула", price: 960, description: "Редкая фиолетовая календула", quantity: 5, image: Image12 },
        { id: 13, name: "Желтые тюльпаны", category: "Тюльпаны", price: 1100, description: "Весенний букет", quantity: 15, image: Image13 },
        { id: 14, name: "Красные тюльпаны", category: "Тюльпаны", price: 1150, description: "Яркие красные тюльпаны", quantity: 9, image: Image14 },
        { id: 15, name: "Белые тюльпаны", category: "Тюльпаны", price: 1200, description: "Нежные белые тюльпаны", quantity: 7, image: Image15 },
        { id: 16, name: "Розовые тюльпаны", category: "Тюльпаны", price: 1180, description: "Нежные розовые тюльпаны", quantity: 6, image: Image16 },
        { id: 17, name: "Хризантемы микс", category: "Хризантемы", price: 1300, description: "Разноцветные хризантемы", quantity: 7, image: Image17 },
        { id: 18, name: "Белые хризантемы", category: "Хризантемы", price: 1350, description: "Нежные белые хризантемы", quantity: 8, image: Image18 },
        { id: 19, name: "Красные хризантемы", category: "Хризантемы", price: 1400, description: "Яркие красные хризантемы", quantity: 6, image: Image19 },
        { id: 20, name: "Желтые хризантемы", category: "Хризантемы", price: 1380, description: "Солнечные желтые хризантемы", quantity: 9, image: Image20 },
    ],
    additionalItems: [
        { id: 21, name: "Красная лента", price: 200, description: "Яркая красная лента для упаковки", quantity: 50, image: redRoses },
        { id: 22, name: "Зеленая лента", price: 180, description: "Стильная зеленая лента", quantity: 30, image: redRoses },
        { id: 23, name: "Подарочная упаковка", price: 350, description: "Роскошная подарочная упаковка", quantity: 20, image: redRoses },
        // { id: 24, name: "Мешок для подарков", price: 220, description: "Элегантный мешок для подарков", quantity: 15, image: redRoses },
        // { id: 25, name: "Голубая лента", price: 190, description: "Нежная голубая лента", quantity: 40, image: redRoses },
        // { id: 26, name: "Прозрачная упаковка", price: 300, description: "Прозрачная упаковка для букетов", quantity: 25, image: redRoses },
        // { id: 27, name: "Бежевый мешок ", price: 230, description: "Нежный бежевый мешок", quantity: 12, image: redRoses },
        // { id: 28, name: "Серебристая лента", price: 210, description: "Элегантная серебристая лента", quantity: 30, image: redRoses },
    ],
};



const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
});

export default productsSlice.reducer;

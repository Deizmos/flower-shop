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
import Tape1 from "../assets/Лента1.jpg";
import Tape2 from "../assets/Лента2.jpg";
import Tape3 from "../assets/Лента3.jpg";

const initialState = {
    categories: ["Розы", "Календула", "Лилии", "Тюльпаны", "Хризантемы"],
    products: [
        { id: 1, name: "Красные розы", category: "Розы", price: 857000, description: "Классический букет", quantity: 10, image: Image1 },
        { id: 2, name: "Белые розы", category: "Розы", price: 798000, description: "Элегантные белые розы", quantity: 5, image: Image2 },
        { id: 3, name: "Розовые розы", category: "Розы", price: 987000, description: "Нежные розовые розы", quantity: 8, image: Image3 },
        { id: 4, name: "Желтые розы", category: "Розы", price: 853000, description: "Яркие желтые розы", quantity: 6, image: Image4 },
        { id: 5, name: "Белые лилии", category: "Лилии", price: 745000, description: "Ароматные лилии", quantity: 8, image: Image5 },
        { id: 6, name: "Оранжевые лилии", category: "Лилии", price: 606000, description: "Яркие оранжевые лилии", quantity: 6, image: Image6 },
        { id: 7, name: "Красные лилии", category: "Лилии", price: 704000, description: "Традиционные красные лилии", quantity: 7, image: Image7 },
        { id: 8, name: "Розовые лилии", category: "Лилии", price: 691000, description: "Нежные розовые лилии", quantity: 9, image: Image8 },
        { id: 9, name: "Оранжевая календула", category: "Календула", price: 628000, description: "Яркие цветы", quantity: 12, image: Image9 },
        { id: 10, name: "Желтая календула", category: "Календула", price: 963000, description: "Солнечные желтые цветы", quantity: 10, image: Image10 },
        { id: 11, name: "Красная календула", category: "Календула", price: 719000, description: "Красивые красные цветы", quantity: 14, image: Image11 },
        { id: 12, name: "Фиолетовая календула", category: "Календула", price: 987000, description: "Редкая фиолетовая календула", quantity: 5, image: Image12 },
        { id: 13, name: "Желтые тюльпаны", category: "Тюльпаны", price: 892000, description: "Весенний букет", quantity: 15, image: Image13 },
        { id: 14, name: "Красные тюльпаны", category: "Тюльпаны", price: 555000, description: "Яркие красные тюльпаны", quantity: 9, image: Image14 },
        { id: 15, name: "Белые тюльпаны", category: "Тюльпаны", price: 641000, description: "Нежные белые тюльпаны", quantity: 7, image: Image15 },
        { id: 16, name: "Розовые тюльпаны", category: "Тюльпаны", price: 547000, description: "Нежные розовые тюльпаны", quantity: 6, image: Image16 },
        { id: 17, name: "Хризантемы микс", category: "Хризантемы", price: 641000, description: "Разноцветные хризантемы", quantity: 7, image: Image17 },
        { id: 18, name: "Белые хризантемы", category: "Хризантемы", price: 803000, description: "Нежные белые хризантемы", quantity: 8, image: Image18 },
        { id: 19, name: "Красные хризантемы", category: "Хризантемы", price: 600000, description: "Яркие красные хризантемы", quantity: 6, image: Image19 },
        { id: 20, name: "Желтые хризантемы", category: "Хризантемы", price: 754000, description: "Солнечные желтые хризантемы", quantity: 9, image: Image20 }
    ],
    additionalItems: [
        { id: 21, name: "Красная лента", price: 20000, description: "Яркая красная лента для упаковки", quantity: 50, image: Tape1 },
        { id: 22, name: "Зеленая лента", price: 18000, description: "Стильная зеленая лента", quantity: 30, image: Tape2 },
        { id: 23, name: "Подарочная упаковка", price: 35000, description: "Роскошная подарочная упаковка", quantity: 20, image: Tape3 },
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

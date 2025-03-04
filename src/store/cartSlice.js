// cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, name, price, quantity, image } = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.items.push({ id, name, price, quantity, image });
            }

            state.totalAmount += price * quantity;
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            const item = state.items.find(item => item.id === id);

            if (item) {
                state.totalAmount -= item.price * item.quantity;
                state.items = state.items.filter(item => item.id !== id);
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalAmount = 0;
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

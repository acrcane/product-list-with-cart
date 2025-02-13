import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from './productReducer.js';


export const store = configureStore({
    reducer:{
        productsList: productReducer
    }
})
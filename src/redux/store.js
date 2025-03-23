import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from './productReducer.js';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, REGISTER, PERSIST, PURGE } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import { authReducer } from "./auth/authSlice.js";
const productsConfig = {
    key: 'cart',
    storage,
    whitelist:['products'] 
}
const authConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
}
export const store = configureStore({
    reducer:{
        productsList: persistReducer(productsConfig, productReducer),
        auth: persistReducer(authConfig, authReducer)
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware({
            serializableCheck:{
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, REGISTER, PERSIST, PURGE]
            }
        })
})
export const persistor = persistStore(store)
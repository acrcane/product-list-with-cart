import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from './productReducer.js';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, REGISTER, PERSIST, PURGE } from "redux-persist";
import storage from 'redux-persist/lib/storage'
const productsConfig = {
    key: 'cart',
    storage,
    whitelist:['products'] 
}
export const store = configureStore({
    reducer:{
        productsList: persistReducer(productsConfig, productReducer)
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware({
            serializableCheck:{
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, REGISTER, PERSIST, PURGE]
            }
        })
})
export const persistor = persistStore(store)
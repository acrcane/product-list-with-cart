import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  REGISTER,
  PERSIST,
  PURGE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import storageSession from '../utils/sessionsStogage.js';
import { authReducer } from './auth/authSlice.js';
import { productListReducer } from './products/productsSlice.js';
import { cartReducer } from './cart/cartSlice.js';
const cartConfig = {
  key: 'cart',
  storage,
  whitelist: ['cartData'],
};
const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
export const store = configureStore({
  reducer: {
    cart: persistReducer (cartConfig, cartReducer),
    auth: persistReducer(authConfig, authReducer),
    productsList: productListReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, REGISTER, PERSIST, PURGE],
      },
    }),
});
export const persistor = persistStore(store);

import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  isLoading: false,
  error: null,
  cartData: [],
};

const cartSlice = createSlice({
  name: 'cartList',
  initialState,
  reducers: {
    addProduct(state, action) {
      const existingProduct = state.cartData.find(
        product => product.name === action.payload.name
      );
      if (existingProduct) {
        return {
          ...state,
          cartData: state.cartData.map(product =>
            product.name === action.payload.name
              ? {
                  ...product,
                  amount: product.amount + 1,
                  total: (product.amount + 1) * product.price,
                }
              : product
          ),
        };
      }
      return {
        ...state,
        cartData: [...state.cartData, { ...action.payload, amount: 1 }],
      };
    },
    incrementProduct(state, action) {
      state.cartData = state.cartData.map(product =>
        product._id === action.payload._id
          ? {
              ...product,
              amount: product.amount + 1,
              total: (product.amount + 1) * product.price,
            }
          : product
      );
    },
    decrementProduct(state, action) {
      state.cartData = state.cartData.map(product =>
        product._id === action.payload._id
          ? {
              ...product,
              amount: product.amount - 1,
              total: Math.max(0, (product.amount - 1) * product.price),
            }
          : product
      ).filter(product => product.amount > 0);
    },
    removeProduct(state, action) {
      state.cartData = state.cartData.filter(product => product._id !== action.payload._id)
    }
  },
});
export const { addProduct, incrementProduct, decrementProduct, removeProduct } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

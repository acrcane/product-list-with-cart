// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { $authInstans } from '../auth/authSlice';

// export const apiGetCart = createAsyncThunk(
//   'cart/apiGetCart',
//   async (_, thunkApi) => {
//     try {
//       const { data } = await $authInstans.get('carts/usercart');

//       return data.userCart;
//     } catch (error) {
//       return thunkApi(error.message);
//     }
//   }
// );
// export const apiAddToCart = createAsyncThunk(
//   'cart/apiAddToCart',
//   async (productData, thunkApi) => {
//     try {
//       const product = {
//         ...productData,
//         amount: +1,
//         total: (productData.amount + 1) * productData.price
//       }
//       const { data } = await $authInstans.post(
//         '/carts/addproduct',
//         product
//       );
//       console.log(data);
      
//       return data.add;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
// export const apiAddToCart = createAsyncThunk(
//   'cart/apiAddToCart',
//   async (_, thunkApi) => {
//     try {
//      const state = thunkApi.getState()
    //  const cartData = state.cart.cartData.map(product => ({
    //   ...product,
    //   amount: product.amount ?? 1, // Якщо amount немає – ставимо 1
    //   total: (product.amount ?? 1) * product.price, // Перераховуємо total
    // }));
//     console.log(state.cart.cartData);
//       const { data } = await $authInstans.post('/carts/addproduct', {state});
//       console.log(data.cart);
//       console.log(data);
      
//       return data.cart;

//     } catch (error) {
//       console.error("Error in apiAddToCart:", error.response?.data || error.message);
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
// export const apiRemoveFromCart = createAsyncThunk(
//   'cart/apiRemoveFromCart',
//   async (_, thunkApi) => {
//     try {
//     } catch (error) {
//       return thunkApi(error.message);
//     }
//   }
// );

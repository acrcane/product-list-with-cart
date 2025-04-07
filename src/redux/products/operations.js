// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { $authInstans } from '../auth/authSlice';

export const apiGetAllProducts = createAsyncThunk(
  'products/apiGetAllProducts',
  async (_, thunkApi) => {
    try {
      const { data } = await $authInstans.get('products/allproducts');
      // console.log(data.products);
      
      return data.products;
    } catch (error) {
      return thunkApi(error.message);
    }
  }
);
export const apiAddProductsToList = createAsyncThunk(
  'products/apiAddProducts',
  async (_, thunkApi) => {
    try {
    } catch (error) {
      return thunkApi(error.message);
    }
  }
);
export const apiRemoveProductsFromList = createAsyncThunk(
  'products/apiRemoveProducts',
  async (_, thunkApi) => {
    try {
    } catch (error) {
      return thunkApi(error.message);
    }
  }
);

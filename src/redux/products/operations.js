import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const apiGetAllProducts = createAsyncThunk(
  'products/apiGetAllProducts',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('/allproducts');
      return data;
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

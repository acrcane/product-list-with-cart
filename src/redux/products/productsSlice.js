import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";

export const apiGetAllProducts = createAsyncThunk('products/apiGetAllProducts', async (_, thunkApi) => {
    try {
        
    } catch (error) {
        return thunkApi(error.message)
    }
})
export const apiAddProducts = createAsyncThunk('products/apiAddProducts', async (_, thunkApi) => {
    try {
        
    } catch (error) {
        return thunkApi(error.message)
    }
})
export const apiRemoveProducts = createAsyncThunk('products/apiRemoveProducts', async (_, thunkApi) => {
    try {
        
    } catch (error) {
        return thunkApi(error.message)
    }
})

const initialState = {
    isLoading: false,
    isError: null,
    products: null
}
import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { apiGetAllProducts, apiAddProductsToList, apiRemoveProductsFromList } from "./operations";

const initialState = {
    isLoading: false,
    error: null,
    products: []
}

const authSlice = createSlice({
    name: 'shopList',
    initialState,

    extraReducers: builder =>
      builder
        .addCase(apiGetAllProducts.fulfilled, (state, action) => {

        })
        .addCase(apiAddProductsToList.fulfilled, (state, action) => {

        })
        .addCase(apiRemoveProductsFromList.fulfilled, state => {

        })
        .addMatcher(
          isAnyOf(
            apiGetAllProducts.pending,
            apiAddProductsToList.pending,
            apiRemoveProductsFromList.pending,
          ),
          state => {
            state.isLoading = true;
            state.error = null;
          }
        )
        .addMatcher(
          isAnyOf(
            apiGetAllProducts.rejected,
            apiAddProductsToList.rejected,
            apiRemoveProductsFromList.rejected,
          ),
          (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          }
        ),
  });
  
  export const authReducer = authSlice.reducer;
  
import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { apiGetAllProducts, apiAddProductsToList, apiRemoveProductsFromList } from "./operations";

const initialState = {
    isLoading: false,
    error: null,
    productsData: [],    
}

const productListSlice = createSlice({
    name: 'shopList',
    initialState,

    extraReducers: builder =>
      builder
        .addCase(apiGetAllProducts.fulfilled, (state, action) => {
          state.isLoading = false;
          state.productsData = action.payload;
          // console.log(state.productsData.length > 0 ? state.productsData[0].type : "Дані ще не завантажені");
          
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
  
  export const productListReducer = productListSlice.reducer;
  
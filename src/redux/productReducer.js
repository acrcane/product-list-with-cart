import { createSlice } from '@reduxjs/toolkit';

const localStorageRead = () => {
  const savedCarts = localStorage.getItem('cart');
  return savedCarts ? JSON.parse(savedCarts) : [];
};
const initialState = {
  products: localStorageRead(),
  filter: '',
};

const productSlice = createSlice({
  // Ім'я слайсу
  name: 'products',
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсерів
  reducers: {
    addProduct(state, action) {
      const existingProduct = state.products.find(product => 
        product.id === action.payload.id
      );
      if (existingProduct) {
        return {
          ...state,
          products: state.products.map(product => 
            product.id === action.payload.id
              ? {
                  ...product,
                  amount: product.amount + 1,
                  total: (product.amount + 1) * product.price,
                }
              : product
          ),
        };
      }
      return {...state, products:[...state.products, {...action.payload, amount: 1}]}
    },
    decrementProduct(state, action) {
        const product = state.products.find(elem => elem.id === action.payload.id)
        if(product){
            product.amount -= 1
            product.total = product.amount / product.price
        }
        state.products.filter(product => product.amount > 0)

    },
    incrementProduct(state, action){
        const product = state.products.find(elem => elem.id === action.payload.id)
        if(product){
            product.amount += 1
            product.total = product.amount * product.price
        }
        state.products.filter(product => product.amount > 0)
    }
  },
});

// Генератори екшенів
export const { addProduct, decrementProduct, incrementProduct } = productSlice.actions;
// Редюсер слайсу
export const productReducer = productSlice.reducer;

// export const productsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'products/addProduct': {
//             const existingProduct = state.products.find((product) =>
//                 product.id === action.payload.id
//             )
//             if(existingProduct){
//                 return{
//                     ...state,
//                     products: state.products.map((product) =>
//                         product.id === action.payload.id ?{
//                             ...product,
//                             amount: product.amount + 1,
//                             total: (product.amount + 1) * product.price
//                         } : product
//                     )
//                 }
//             }
//             return {...state, products:[...state.products, {...action.payload, amount: 1}]}
//         }
//         case 'products/decrementProduct': {
//             return {
//                 ...state,
//                 products: state.products.map((product) =>
//                     product.id === action.payload ?{
//                         ...product,
//                         amount: product.amount - 1,

//                     } : product
//                 ).filter((product) => product.amount > 0)
//     }
//         }
//         case 'products/incrementProduct': {
//             return {
//                 ...state,
//                 products: state.products.map((product) =>
//                     product.id === action.payload ?{
//                         ...product,
//                         amount: product.amount + 1,
//                         total: product.amount * product.price
//                     } : product
//                 ).filter((product) => product.amount > 0)
//     }
//         }
//         case 'products/find': {
//             return{
//                 ...state, filter: action.payload
//             }
//         }
//         default:{
//             return state
//         }

//     }
// }

// export const addToBuyCart = (payload) => {
//     return{
//         type: 'products/addProduct',
//         payload: payload
//     }
// }
// export const searchProducts = (payload) => {
//     return{
//         type: 'products/find',
//         payload: payload
//     }
// }

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import {
//   addProduct,
//   incrementProduct,
//   decrementProduct,
// } from '../../redux/productReducer';
// import { selectProducts } from '../../redux/selectors';
import { List, ListItem } from './ProductList.styled';
import { ProductCart } from 'components';
// import { selectAllProducts } from '../../redux/products/products.selectors';
import { apiGetAllProducts } from '../../redux/products/operations';
import { addProduct, incrementProduct, decrementProduct } from '../../redux/cart/cartSlice';
import { selectCartProducts } from '../../redux/cart/cart.selectors';

// import {}

export const ProductsList = ({ data }) => {
  const dispatch = useDispatch();
 
 const productCart = useSelector(selectCartProducts)
  // console.log(productCart);
  
  useEffect(() => {
    dispatch(apiGetAllProducts())
  }, [dispatch])

  const addProdutcToCart = product => {
    dispatch(addProduct(product));
  };

  
  const handleDecrement = productId => {
    dispatch(decrementProduct({ _id: productId }));
  };
  const handleIncrement = productId => {
    dispatch(incrementProduct({ _id: productId }));
  };

  // const storeProducts = useSelector(selectProducts);
  
  return (
    <List>
      {data.map(d => {
        const cart = productCart?.find(p => d._id === p._id);
        return (
          <ListItem key={d._id}>
            <ProductCart
              cart={cart}
              d={d}
              addProdutcToCart={addProdutcToCart}               
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

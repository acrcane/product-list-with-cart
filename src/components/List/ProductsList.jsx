import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addProduct,
  incrementProduct,
  decrementProduct,
} from '../../redux/productReducer';
import { selectProducts } from '../../redux/selectors';
import { List, ListItem } from './ProductList.styled';
import { ProductCart } from 'components';

export const ProductsList = ({ data }) => {
  const dispatch = useDispatch();
  const addProdutcToCart = product => {
    dispatch(addProduct(product));
  };
  const handleDecrement = productId => {
    dispatch(decrementProduct({ id: productId }));
  };
  const handleIncrement = productId => {
    dispatch(incrementProduct({ id: productId }));
  };

  const storeProducts = useSelector(selectProducts);
  return (
    <List>
      {data.map(d => {
        const productCart = storeProducts.find(p => d.id === p.id);
        return (
          <ListItem key={d.id}>
            <ProductCart
              productCart={productCart}
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

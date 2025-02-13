import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  List,
  ListItem,
  ImgContainer,
  Image,
  AddBtn,
  ProductContainer,
  TypeOfProduct,
  ProductName,
  ProductPrice,
} from './ProductList.styled';
import data from '../../data.json';
import { addProduct } from '../../redux/productReducer';

export const ProductList = () => {
  const storeProducts = useSelector(store => store.productsList.products);
  const dispatch = useDispatch();
  const addProdutcToCart = product => {
    dispatch(addProduct(product));
  };
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(storeProducts));
  }, [storeProducts]);
  return (
    <List>
      {data.map((d, i) => {
        return (
          <ListItem key={i}>
            <ImgContainer>
              <Image src={d.image.mobile} />
              <AddBtn onClick={() => addProdutcToCart(d)}>Add to cart</AddBtn>
              <ProductContainer>
                <TypeOfProduct>{d.category}</TypeOfProduct>
                <ProductName>{d.name}</ProductName>
                <ProductPrice>{d.price}$</ProductPrice>
              </ProductContainer>
            </ImgContainer>
          </ListItem>
        );
      })}
    </List>
  );
};

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
  ButtonsContainer,
  AmounBtn,
  AmoutSpan,
} from './ProductList.styled';
import data from '../../data.json';
import { addProduct, incrementProduct, decrementProduct  } from '../../redux/productReducer';


export const ProductList = () => {
  const storeProducts = useSelector(store => store.productsList.products);
  const dispatch = useDispatch();
  const addProdutcToCart = product => {
    dispatch(addProduct(product));
  };
  const handleDecrement = productId => {
    dispatch(decrementProduct({id: productId}));
  };
  const handleIncrement = productId => {
    dispatch(incrementProduct({id: productId}));
  };
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(storeProducts));
  }, [storeProducts]);
  return (
    <List>
      {data.map((d, i) => {
        const productCart = storeProducts.find(product => d.id === product.id);
        console.log(d.image.mobile);
        
        return (
          <ListItem key={i}>
            <ImgContainer>
            <Image src={d.image.mobile} alt={d.name} />
              {productCart ? (
                <ButtonsContainer>
                  <AmounBtn onClick={() => handleDecrement(productCart.id)}>-</AmounBtn>
                  <AmoutSpan>{productCart.amount}</AmoutSpan>
                  <AmounBtn onClick={() => handleIncrement(productCart.id)}>+</AmounBtn>
                </ButtonsContainer>
              ) : (
                <AddBtn onClick={() => addProdutcToCart(d)}>Add Product</AddBtn>
              )}
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

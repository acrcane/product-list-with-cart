import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProduct,
  incrementProduct,
  decrementProduct,
} from '../../redux/productReducer';
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
  ImgHelper,
  Icon,
} from './ProductList.styled';
import data from '../../data.json';
import icons from '../../icons/symbol-defs.svg'

export const ProductList = () => {
  const storeProducts = useSelector(store => store.productsList.products);
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
  return (
    <List>
      {data.map((d, i) => {
        const productCart = storeProducts.find(product => d.id === product.id);
        return (
          <ListItem key={i}>
            <ImgContainer>
              <Image>
                <source media="(max-width: 767px)" srcSet={d.image.mobile} />
                <source media="(min-width: 768px)" srcSet={d.image.tablet} />
                <source media="(min-width: 1440px)" srcSet={d.image.desktop} />
                <ImgHelper src={d.image.thumbnail} alt={d.name} />
              </Image>
              {productCart ? (
                <ButtonsContainer>
                  <AmounBtn onClick={() => handleDecrement(productCart.id)}>
                    <Icon><use href={`${icons}#icon-icon-decrement-quantity`}/></Icon>
                  </AmounBtn>
                  <AmoutSpan>{productCart.amount}</AmoutSpan>
                  <AmounBtn onClick={() => handleIncrement(productCart.id)}>
                    <Icon><use href={`${icons}#icon-icon-increment-quantity`}/></Icon>
                  </AmounBtn>
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

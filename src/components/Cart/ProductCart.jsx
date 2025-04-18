import React from 'react';
import {
  ImgContainer,
  Image,
  ImgHelper,
  ProductContainer,
  TypeOfProduct,
  ProductName,
  ProductPrice,
  ButtonsContainer,
  AmoutSpan,
} from './Cart.styled';
import {
  AmounBtn,
  AddBtn,
  IconAmount,
} from 'components/Buttons/Buttons.styled';
import icons from '../../icons/symbol-defs.svg';

export const ProductCart = ({
  cart,
  d,
  addProdutcToCart,
  handleDecrement,
  handleIncrement,
}) => {
  return (
    <>
      <ImgContainer>
        <Image>
          <source media="(max-width: 767px)" srcSet={d.image.mobile} />
          <source media="(min-width: 768px)" srcSet={d.image.tablet} />
          <source media="(min-width: 1440px)" srcSet={d.image.desktop} />
          <ImgHelper src={d.image.thumbnail} alt={d.name} />
        </Image>
        {cart ? (
          <ButtonsContainer>
            <AmounBtn onClick={() => handleDecrement(cart._id)}>
              <IconAmount>
                <use href={`${icons}#icon-icon-decrement-quantity`} />
              </IconAmount>
            </AmounBtn>
            <AmoutSpan>{cart.amount}</AmoutSpan>
            <AmounBtn onClick={() => handleIncrement(cart._id)}>
              <IconAmount>
                <use href={`${icons}#icon-icon-increment-quantity`} />
              </IconAmount>
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
    </>
  );
};

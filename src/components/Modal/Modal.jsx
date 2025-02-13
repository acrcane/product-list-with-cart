import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  ModalBackground,
  ModalContainer,
  TopContainer,
  Title,
  CloseBtn,
  List,
  ListItem,
  ImgContainer,
  OrderImage,
  OrderInfoContainer,
  OrderTitle,
  Amount,
  Price,
  TotalPrice,
  OrderBtn,
  ProductBtn,
  Icons,
  EmptyIcon
} from './Modal.styled';
import icons from '../../assets/images/symbol-defs.svg';
import { decrementProduct, incrementProduct } from '../../redux/productReducer';

export const Modal = ({ close }) => {
  const products = useSelector(store => store.productsList.products);
  const dispatch = useDispatch();
  const handleDecrement = productId => {
    dispatch(decrementProduct({id: productId}));
  };
  const handleIncrement = productId => {
    dispatch(incrementProduct({id: productId}));
  };
  const [isDisabled, setIsDisabled] = useState(true)
  useEffect(() => {setIsDisabled(false)}, [products])
  return (
    <ModalBackground>
      <ModalContainer>
        <TopContainer>
          <Title>Order list</Title>
          <CloseBtn onClick={close}>X</CloseBtn>
        </TopContainer>
        <List>
          {products.length === 0 ? (
            <>
            <h2 style={{textAlign: 'center'}}>Your shopping cart is empty</h2>
            <EmptyIcon><use href={`${icons}#icon-illustration-empty-cart`}/></EmptyIcon>
            </>
          ) : (
            products.map((product, index) => {
              return (
                <ListItem key={index}>
                  <ImgContainer>
                    <OrderImage src={product.image.thumbnail} />
                  </ImgContainer>
                  <OrderInfoContainer>
                    <OrderTitle>{product.name}</OrderTitle>
                    <Amount>x{product.amount}</Amount>
                    <Price>${product.price}</Price>
                  </OrderInfoContainer>
                  <TotalPrice>${product.total}</TotalPrice>
                  <ProductBtn onClick={() => handleIncrement(product.id)}>
                    <Icons >
                      <use href={`${icons}#icon-icon-increment-quantity`} />
                    </Icons>
                  </ProductBtn>
                  <ProductBtn onClick={() => handleDecrement(product.id)}>
                    <Icons style={{fill: '#000'}}>
                      <use href={`${icons}#icon-icon-decrement-quantity`} />
                    </Icons>
                  </ProductBtn>
                </ListItem>
              );
            })
          )}
        </List>
          {/* {products.length === 0 ? (<OrderBtn disabled={isDisabled}>Order</OrderBtn>)
          : (<OrderBtn disabled={setIsDisabled(true)}>Order</OrderBtn>)
            } */}
            <OrderBtn disabled={isDisabled}>Order</OrderBtn>
      </ModalContainer>
    </ModalBackground>
  );
};

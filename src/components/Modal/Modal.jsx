import React from 'react';
import { useSelector,  } from 'react-redux';
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

  EmptyIcon
} from './Modal.styled';
import icons from '../../assets/images/symbol-defs.svg';


export const Modal = ({ close }) => {
  const products = useSelector(store => store.productsList.products);

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
                  <TotalPrice>${!product.total ? product.price : product.total}</TotalPrice>
                </ListItem>
              );
            })
          )}
        </List>
            <OrderBtn disabled={products.length === 0}>Order</OrderBtn>
      </ModalContainer>
    </ModalBackground>
  );
};

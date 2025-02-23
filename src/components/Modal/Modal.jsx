import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../../redux/productReducer';
import {
  ModalBackground,
  ModalContainer,
  TopContainer,
  Title,
  CloseBtn,
  List,
  ListItem,
  ImgContainer,
  OrderPicture,
  OrderImage,
  OrderInfoContainer,
  OrderTitle,
  Amount,
  Price,
  TotalPrice,
  OrderBtn,
  RemoveBtnContainer,
  RemoveBtn,
  EmptyIcon,
  RemoveIcon,
} from './Modal.styled';
import icons from '../../icons/symbol-defs.svg';
import { selectProducts } from '../../redux/selectors';

export const Modal = ({ close }) => {

  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const handleRemove = productId => {
    dispatch(removeProduct({ id: productId }));
  };
  useEffect(() => {
    const handleEsc = e => {
      if (e.key === 'Escape') {
        close();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [close]);
  return (
    <ModalBackground>
      <ModalContainer>
        <TopContainer>
          <Title>Order list</Title>
          <CloseBtn onClick={close}><RemoveIcon><use href={`${icons}#icon-icon-remove-item`}/></RemoveIcon></CloseBtn>
        </TopContainer>
        <List>
          {products.length === 0 ? (
            <>
              <h2 style={{ textAlign: 'center' }}>
                Your shopping cart is empty
              </h2>
              <EmptyIcon>
                <use href={`${icons}#icon-illustration-empty-cart`} />
              </EmptyIcon>
            </>
          ) : (
            products.map((product, index) => {
              return (
                <ListItem key={index}>
                  <ImgContainer>
                    <OrderPicture>
                      <source
                        media="(max-width: 767px)"
                        srcSet={product.image.mobile}
                      />
                      <source
                        media="(min-width: 768px)"
                        srcSet={product.image.tablet}
                      />
                      <source
                        media="(min-width: 1440px)"
                        srcSet={product.image.desktop}
                      />
                      <OrderImage src={product.image.thumbnail} />
                    </OrderPicture>
                  </ImgContainer>
                  <OrderInfoContainer>
                    <OrderTitle>{product.name}</OrderTitle>
                    <Amount>x{product.amount}</Amount>
                    <Price>${product.price}</Price>
                  </OrderInfoContainer>
                  <TotalPrice>
                    ${!product.total ? product.price : product.total}
                  </TotalPrice>
                  <RemoveBtnContainer>
                  <RemoveBtn onClick={() => handleRemove(product.id)}>
                    <RemoveIcon><use href={`${icons}#icon-icon-remove-item`}/></RemoveIcon>
                  </RemoveBtn>
                  </RemoveBtnContainer>
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

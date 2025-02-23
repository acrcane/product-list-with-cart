import React from 'react';
import {
  Section,
  ShopContainer,
  ShopImg,
  ShopInfoContainer,
  ShopTitle,
  ShopBtn,
} from './CategorySection.styled';
import ciabattaImg from '../../images/homeImg/ciabatta.jpg'
import tiramisuImg from '../../images/homeImg/tiramisu.jpg'

export const CategorySection = () => {
  return (
    <Section>
      <ShopContainer>
        <ShopInfoContainer>
          <ShopTitle>Order baking</ShopTitle>
          <ShopBtn>Order</ShopBtn>
        </ShopInfoContainer>
        <ShopImg src={ciabattaImg}/>
      </ShopContainer>
      <ShopContainer>
        <ShopImg src={tiramisuImg}/>
        <ShopInfoContainer>
          <ShopTitle>Order desserts</ShopTitle>
          <ShopBtn>Order</ShopBtn>
        </ShopInfoContainer>
      </ShopContainer>
    </Section>
  );
};

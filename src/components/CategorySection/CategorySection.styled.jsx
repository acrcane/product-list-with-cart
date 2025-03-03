import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

const slideTop = keyframes`
0% {

              transform: translateY(200px);
              opacity: 0;
    }
    100% {

              transform: translateY(0px);
              opacity: 1;
    }
`;
export const Section = styled.section`
  /* margin-top: 10px; */
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  @media only screen and (min-width: 768px) {
    height: 900px;
  }
`;

export const ShopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  animation: ${slideTop} 0.9s cubic-bezier(0.47, 0, 0.745, 0.715) 0.2s both;
  @media only screen and (min-width: 768px) {
    letter-spacing: 1.5px;
  }
`;

export const ShopImg = styled.img`
  display: block;
  object-fit: cover;
  width: 50%;
  /* height: 95%; */
  /* border-radius: 10px; */
  @media only screen and (min-width: 768px) {
    letter-spacing: 1.5px;
    max-height: 100%;
  }
`;

export const ShopInfoContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: var(--main-theme);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 768px) {
    letter-spacing: 1.5px;
  }
`;

export const ShopTitle = styled.h2`
  font-size: 1.7em;
  font-weight: 600;
`;

export const ShopBtn = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 60px;
  border-radius: 50px;
  outline: none;
  border: 1px solid var(--main-rose);
  background: transparent;
  color: var(--main-text);
  font-size: 22px;
  transition: 0.4s ease-in-out;
  text-decoration: none;
  &:hover,
  :focus {
    color: var(--main-white);
    background-color: var(--main-rose);
  }
  @media only screen and (min-width: 768px) {
    width: 300px;
  }
`;

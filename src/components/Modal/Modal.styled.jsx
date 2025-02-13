import styled from 'styled-components';

export const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0000007f;
  position: fixed;
  display: flex;
  align-items: flex-end;
  z-index: 10;
  top: 0%;
  right: 0%;
  left: 0%; 
  bottom: 0%;
  @media only screen and (min-width: 768px){
    justify-content: center;
    align-items: center;

}
`;
export const ModalContainer = styled.div`
  width: 100%;
  height: 90%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 30px 10px 10px 10px;
  background-color: #fff;
  @media only screen and (min-width: 768px){
    width: 600px;
    height: 600px;
    border-radius: 25px;
    padding: 35px 30px 10px 30px;
}
`;
export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;
export const Title = styled.h3`
  font-size: 28px;
  color: var(--main-text);
`;
export const CloseBtn = styled.button`
  width: 32px;
  height: 32px;
  border: 1px solid var(--main-red);
  color: var(--main-red);
  outline: none;
  border-radius: 50%;
  background-color: transparent;
`;
export const List = styled.ul`
  padding: 0;
  background-color: var(--main-theme);
  flex: 1;
  border-radius: 15px;
  padding: 15px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 17px;
  border-radius: 10px;
  background-color: var(--main-white);
  padding: 10px 20px;
`;
export const ImgContainer = styled.div`
  min-width: 25%;
  height: 100%;
  background-color: #000;
`;
export const OrderImage = styled.img``;
export const OrderInfoContainer = styled.div`
  width: 50%;
`;
export const OrderTitle = styled.h4`
  color: var(--main-text);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const Amount = styled.span`
  color: var(--main-red);
  margin-right: 20px;
`;
export const Price = styled.span`
  color: var(--main-text);
`;
export const TotalPrice = styled.span`
width: 25%;
text-align: center;
`;
export const OrderBtn = styled.button`
  height: 50px;
  background-color: var(--main-red);
  color: var(--main-white);
  border-radius: 30px;
  border: none;
  outline: none;
  @media only screen and (min-width: 768px) {
    font-size: 1.5em;
}
`;
export const ProductBtn = styled.button`
width: 52px;
height: 32px;
border: none;
outline: none;
border-radius: 50%;
padding: 0;
background-color: transparent;
`
export const Icons = styled.svg`
width: 52px;
height: 32px;
fill: #10ce72;
border: 1px solid #000;
border-radius: 50%;
padding: 3px;
`

export const EmptyIcon = styled.svg`
  width: 100%;
  height: 100%;
`

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
  @media only screen and (min-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;
export const ModalContainer = styled.div`
position: relative;
bottom: 10%;
  width: 100%;
  height: 90%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 30px 10px 10px 10px;
  background-color: var(--main-white);
  @media only screen and (min-width: 768px) {
    width: 800px;
    height: 900px;
    bottom: 0%;
    border-radius: 25px;
    padding: 35px 30px 10px 30px;
  }
  @media only screen and (min-width: 1280px) {
    width: 800px;
    height: 600px;
    bottom: 0%;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border: 1px solid var(--main-red);
  color: var(--main-red);
  outline: none;
  border-radius: 50%;
  background-color: transparent;
  @media only screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
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
  @media only screen and (min-width: 1280px) {
    /* height: 600px; */
  }
`;
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 17px;
  border-radius: 10px;
  background-color: var(--main-white);
  padding: 10px 20px;
  @media only screen and (min-width: 768px) {
    height: 185px;
  }
  @media only screen and (min-width: 1280px) {
    height: 100px;
  }
`;
export const ImgContainer = styled.div`
  width: 42%;
  height: 100%;
  background-color: #000;
  @media only screen and (min-width: 1280px) {
    width: 100px;
  }
`;
export const OrderPicture = styled.picture`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
export const OrderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
export const OrderInfoContainer = styled.div`
  width: 38%;
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
  width: 15%;
  text-align: center;
  @media only screen and (min-width: 768px) {
    font-size: 2em;
  }
`;
export const OrderBtn = styled.button`
  height: 50px;
  background-color: ${props => (props.disabled ? '#ccc' : 'var(--main-red)')};
  color: var(--main-white);
  border-radius: 30px;
  border: 1px solid ${props => (props.disabled ? '#ccc' : 'var(--main-red)')};
  outline: none;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: ${props =>
      props.disabled ? '#ccc' : 'var(--main-white)'};
    color: ${props => (props.disabled ? '#ccc' : 'var(--main-rose)')};
  }
  @media only screen and (min-width: 768px) {
    margin-top: 30px;
    height: 80px;
    font-size: 1.5em;
    border-radius: 45px;
  }
`;

export const EmptyIcon = styled.svg`
  width: 100%;
  height: 100%;
`;

export const RemoveBtnContainer = styled.div`
  width: 5%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const RemoveBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border: 1px solid var(--main-rose);
  border-radius: 50%;
  outline: none;
  background-color: transparent;
  @media only screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;
export const RemoveIcon = styled.svg`
  width: 50%;
  height: 50%;
  fill: var(--main-rose);
  stroke: var(--main-rose);

  @media only screen and (min-width: 768px) {
    transform: scale(1);
  }
`;

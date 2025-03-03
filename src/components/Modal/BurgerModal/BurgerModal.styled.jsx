import styled from "styled-components";





export const ModalBG = styled.div`
position: absolute;
top: 0%;
left: 0%;
width: 100%;
height: 100vh;
background-color: #000000a8;
z-index: 1;
transform: translateX(-100%);
  transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  ${({show}) => show && 
  `transform: translateX(0);

  `}
`

export const MobileMenu = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 500px;
  background-color: var(--main-green);
  /* transform: translateX(-100%);
  transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  ${({show}) => show && 
  `transform: translateX(0);

  `} */
`;

export const CloseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 30px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;


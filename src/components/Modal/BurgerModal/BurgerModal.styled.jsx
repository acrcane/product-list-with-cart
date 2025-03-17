import styled, { keyframes } from '@xstyled/styled-components';
const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;


export const ModalBG = styled.div`
position: absolute;
top: 0%;
left: 0%;
width: 100%;
height: 100vh;
background-color: #000000ee;
z-index: 1;
  transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: ${({ show }) => (show ? 'block' : 'none')};
  transition: opacity 0.3s ease-in-out;
`

export const MobileMenu = styled.div`

  position: absolute;
  top: 0%;
  left: 0%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: var(--main-green);
  animation: ${({ show }) => (show ? slideIn : slideOut)} 0.5s ease-in-out forwards;

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


import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const Header = styled.header`
  width: 100%;
  padding: 20px 30px;
  height: 80px;
  background-color: var(--main-green);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const MobileMenu = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0%;
  right: 0%;
  width: 100%;
  height: 100vh;
  background-color: var(--main-green);

  z-index: 12;
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
export const LogoContainer = styled.div`
flex: 1;
`
export const Logo = styled(NavLink)`
  font-size: 32px;
  font-weight: 800;
  color: var(--main-text);
  text-decoration: none;
  cursor: pointer;
`;
export const OpenModal = styled.button`
  border: none;
  outline: none;
  width: 40px;
  height: 40px;
  background-color: transparent;
  position: relative;
  &::before {
    content: '${props => props.$count}';
    position: absolute;
    font-size: 12px;
    width: 15px;
    height: 15px;
    background-color: var(--main-white);
    border-radius: 50%;
    z-index: 2;
    top: 50%;
    right: 50%;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, -120%);
    color: var(--main-red);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const BtnSvg = styled.svg`
  /* display: block; */
  width: 100%;
  height: 100%;
  fill: var(--main-rose);
  /* transform: scale(2); */
  @media only screen and (min-width: 1400px) {
    transform: scale(1);
  }
`;

export const Nav = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  @media only screen and (min-width: 1400px) {
    flex-direction: row;
    gap: 20px;
  }
`;

export const NavListElem = styled.li``;

export const NavListLink = styled(NavLink)`
  text-decoration: none;
  color: var(--main-rose);
  font-size: 1.5em;
  font-weight: 500;
`;

export const BurgerBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  background-color: transparent;
  outline: none;
  border: none;
`;
// export const AccountBtn = styled.button``

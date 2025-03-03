import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectProducts } from '../../redux/selectors';
import {
  Header,
  Logo,
  OpenModal,
  BtnSvg,

  Nav,
  NavList,
  NavListElem,
  NavListLink,
  BurgerBtn,

  LogoContainer
} from './Header.styled';
import icons from '../../icons/symbol-defs.svg';
import { BurgerModal } from 'components/Modal/BurgerModal/BurgerModal';

export const HeaderCompnent = ({ open }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1400);
  const location = useLocation();
  const productsCounter = useSelector(selectProducts);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1440);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const routesMap = [
    { path: '/desserts', label: 'Desserts' },
    { path: '/baking', label: 'Baking' },
    { path: '/products', label: 'All products' },
  ];

  const title =
    routesMap.find(route => location.pathname.includes(route.path))?.label ||
    'Home';

  const totalProducts = Array.isArray(productsCounter)
    ? productsCounter.reduce((sum, item) => sum + (item.amount || 0), 0)
    : 0;

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Header>
      <LogoContainer>
      <Logo to="/">{title}</Logo>
      </LogoContainer>
      
      <OpenModal onClick={open} $count={totalProducts}>
        <BtnSvg>
          <use href={`${icons}#icon-icon-add-to-cart`} />
        </BtnSvg>
      </OpenModal>
      {isOpen && (
        <BurgerModal isOpen={isOpen} setIsOpen={setIsOpen} handleClose={handleClose}/>
      )}
      {isMobile ? (
        <BurgerBtn onClick={() => setIsOpen(!isOpen)}>
          <BtnSvg>
            <use href={`${icons}#icon-hamburger-menu`} />
          </BtnSvg>
        </BurgerBtn>
      ) : (
        <Nav>
          <NavList>
            <NavListElem>
              <NavListLink to="/products" onClick={() => setIsOpen(false)}>
                TEst
              </NavListLink>
            </NavListElem>
            <NavListElem>
              <NavListLink
                to="/products/desserts"
                onClick={() => setIsOpen(false)}
              >
                Test Des
              </NavListLink>
            </NavListElem>
            <NavListElem>
              <NavListLink
                to="/products/baking"
                onClick={() => setIsOpen(false)}
              >
                Test Bak
              </NavListLink>
            </NavListElem>
          </NavList>
        </Nav>
      )}
    </Header>
  );
};

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { apiGetAllProducts } from '../../redux/products/operations';
import {
  Header,
  Logo,
  OpenModal,
  BtnSvg,
  NavListLink,
  BurgerBtn,
  LogoContainer,
} from './Header.styled';
import icons from '../../icons/symbol-defs.svg';
import { BurgerModal } from 'components/Modal/BurgerModal/BurgerModal';
import { Navigation, UserMenu } from 'components';
import { selectAuthIsLoggedIn } from '../../redux/auth/authSlice.selectors';
import { selectCartProducts } from '../../redux/cart/cart.selectors';

export const HeaderCompnent = ({ open }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1400);
  const location = useLocation();
  const productsCounter = useSelector(selectCartProducts);
  const isLoggedIn = useSelector(selectAuthIsLoggedIn)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const routesMap = [
    { path: '/desserts', label: 'Desserts' },
    { path: '/baking', label: 'Baking' },
    { path: '/products', label: 'All products' },
    { path: '/registration', label: 'Registration' },
    { path: '/signin', label: 'Sign In' },
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
      {isLoggedIn ? (
        <>
        <UserMenu />
        <OpenModal onClick={open} $count={totalProducts}>
        <BtnSvg>
          <use href={`${icons}#icon-icon-add-to-cart`} />
        </BtnSvg>
      </OpenModal></>
      ) : (<NavListLink to="/signin">Ac</NavListLink>)}
      {isOpen && (
        <BurgerModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleClose={handleClose}
        />
      )}
      {isMobile ? (
        <BurgerBtn onClick={() => setIsOpen(!isOpen)}>
          <BtnSvg>
            <use href={`${icons}#icon-hamburger-menu`} />
          </BtnSvg>
        </BurgerBtn>
      ) : (
        <Navigation handleClose={handleClose} />
      )}
    </Header>
  );
};

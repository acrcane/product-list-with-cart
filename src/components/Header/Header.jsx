import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Header, Title, OpenModal, BtnSvg } from './Header.styled';
import icons from '../../icons/symbol-defs.svg';
import { selectProducts } from '../../redux/selectors';


export const HeaderCompnent = ({ open }) => {
  const routesMap = [
    { path: '/desserts', label: 'Desserts' },
    { path: '/bakings', label: 'Bakings' },
  ];
  const location = useLocation()
  const title = routesMap.find((route) => location.pathname.includes(route.path))?.label || 'Home'
  const productsCounter = useSelector(selectProducts);
  const totalProducts = Array.isArray(productsCounter)
    ? productsCounter.reduce((sum, item) => sum + (item.amount || 0), 0)
    : 0;
  return (
    <Header>
      <Title>{title}</Title>
      <OpenModal onClick={open} $count={totalProducts}>
        <BtnSvg>
          <use href={`${icons}#icon-icon-add-to-cart`} />
        </BtnSvg>
      </OpenModal>
    </Header>
  );
};

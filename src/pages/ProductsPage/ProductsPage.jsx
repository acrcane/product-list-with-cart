import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ProductsList } from 'components';
import { Main } from './ProductsPage.styled';
import { selectAllProducts } from '../../redux/products/products.selectors';
import { useDispatch, useSelector } from 'react-redux';
import { apiGetAllProducts } from '../../redux/products/operations';

const ProductsPage = () => {
  const productsListSel = useSelector(selectAllProducts);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const { type } = useParams();
  useEffect(() => {
    dispatch(apiGetAllProducts());
  }, [dispatch]);

  useEffect(() => {
    if (!productsListSel.length) {
      setProducts([]);
      return;
    }
    if (type) {
      const productsList = productsListSel.filter(
        d => d.type.trim().toLowerCase() === type.trim().toLowerCase()
      );
      setProducts(productsList);
    } else {
      setProducts(productsListSel);
    }
  }, [type, productsListSel]);

  return (
    <Main>
      <ProductsList data={products} />
    </Main>
  );
};

export default ProductsPage;

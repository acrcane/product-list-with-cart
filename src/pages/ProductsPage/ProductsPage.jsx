import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ProductsList } from 'components';
import { Main } from './ProductsPage.styled';
import data from '../../data.json';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    if (type) {
      const filteredProducts = data.filter(d => d.type === type);
      setProducts(filteredProducts);
    } else {
      setProducts(data);
    }
  }, [type]);

  return (
    <Main>
      <ProductsList data={products} />
    </Main>
  );
};

export default ProductsPage;

import React from 'react';
import {
  Header,
  Title,
  OpenModal,
  BtnSvg,
  // SearchForm,
  // SearchInput,
} from './Header.styled';
import icons from '../../assets/images/symbol-defs.svg';
import { useSelector,  } from 'react-redux';
// import { searchProducts } from '../../redux/productReducer';

export const HeaderCompnent = ({ open }) => {
  // const dispatch = useDispatch()
  const productsCounter = useSelector(store => store.productsList.products);
  // const totalProducts = productsCounter.reduce(
  //   (sum, item) => sum + item.amount,
  //   0
  // );
  const totalProducts = Array.isArray(productsCounter)
  ? productsCounter.reduce((sum, item) => sum + (item.amount || 0), 0)
  : 0;
  // const search = event => {
  //   const value = event.target.value
  //   dispatch(searchProducts(value))
  // }
  return (
    <Header>
      <Title>Desserts</Title>
      {/* <SearchForm>
        <SearchInput type='text' placeholder='Search' onChange={search}/>
      </SearchForm> */}
      <OpenModal onClick={open} $count={totalProducts}>
        <BtnSvg>
          <use href={`${icons}#icon-icon-add-to-cart`} />
        </BtnSvg>
      </OpenModal>
    </Header>
  );
};

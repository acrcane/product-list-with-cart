import { lazy, Suspense, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import { Modal } from '../index';
import { HeaderCompnent } from '../index';
import { FooterComponent } from '../index';
import { Wrapper } from './App.styled';

const Home = lazy(() => import('../../pages/HomePage/HomePage'));
const ProductsPage = lazy(() => import('../../pages/ProductsPage/ProductsPage'))

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Wrapper>
      <Suspense
        fallback={
          <Oval
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          ></Oval>
        }
      >
        <HeaderCompnent open={handleOpen} />
        {isOpen && <Modal close={handleClose} />}
        <Routes>
          <Route index element={<Home />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/products/:type' element={<ProductsPage />} />
        </Routes>
        <FooterComponent />
      </Suspense>
    </Wrapper>
  );
};

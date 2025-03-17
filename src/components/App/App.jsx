import { lazy, Suspense, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import { Modal } from '../index';
import { HeaderCompnent } from '../index';
import { FooterComponent } from '../index';
import { Wrapper } from './App.styled';
// import {capitalizeWords} from '../../task'

const Home = lazy(() => import('../../pages/HomePage/HomePage'));
const ProductsPage = lazy(() => import('../../pages/ProductsPage/ProductsPage'))
const RegistrationPage = lazy(() => import('../../pages/AuthPages/RegistrationPage'))
const SignInPage = lazy(() => import('../../pages/AuthPages/SignInPage'))

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  // capitalizeWords("javaScript is awesome")
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
          <Route path='/registration' element={<RegistrationPage />} />
          <Route path='/signin' element={<SignInPage />} />
        </Routes>
        <FooterComponent />
      </Suspense>
    </Wrapper>
  );
};

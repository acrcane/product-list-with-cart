import { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { apiRefreshUser } from '../../redux/auth/authSlice';
import { Oval } from 'react-loader-spinner';
import { Modal } from '../index';
import { HeaderCompnent } from '../index';
import { FooterComponent } from '../index';
import { Wrapper } from './App.styled';
import { RestrictedRoute } from '../index';

const Home = lazy(() => import('../../pages/HomePage/HomePage'));
const ProductsPage = lazy(() =>
  import('../../pages/ProductsPage/ProductsPage')
);
const RegistrationPage = lazy(() =>
  import('../../pages/AuthPages/RegistrationPage')
);
const SignInPage = lazy(() => import('../../pages/AuthPages/SignInPage'));

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);
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
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:type" element={<ProductsPage />} />
          <Route
            path="/registration"
            element={
              <RestrictedRoute>
                <RegistrationPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <RestrictedRoute>
                <SignInPage />
              </RestrictedRoute>
            }
          />
        </Routes>
        <FooterComponent />
      </Suspense>
    </Wrapper>
  );
};

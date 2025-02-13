import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { Wrapper } from './App.styled';
import { HeaderCompnent } from '../Header/Header';
import { ProductList } from 'components/List/ProductList';
import { FooterComponent } from 'components/Footer/Footer';
// import { Test } from "../../Test";

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
      <HeaderCompnent open={handleOpen} />
      {isOpen && <Modal close={handleClose} />}
      <ProductList />
      <FooterComponent />
    </Wrapper>
  );
};

import React from 'react';
import { ModalBG } from './BurgerModal.styled';

export const ModalBackground = ({ handleClose }) => {
  return <ModalBG onClick={handleClose} />;
};

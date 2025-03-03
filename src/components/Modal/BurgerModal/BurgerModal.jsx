import React, { useEffect, useState } from 'react';
import { MobileMenu, CloseBtn } from './BurgerModal.styled';
import {
  Nav,
  NavList,
  NavListElem,
  NavListLink,
} from 'components/Header/Header.styled';
import { ModalBackground } from '../BurgerModal/ModalBackground';

export const BurgerModal = ({ setIsOpen }) => {

    const [showContent, setShowContent] = useState(false)

    useEffect(() => {
        setShowContent(true)
    }, [])

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
    
      <ModalBackground handleClose={handleClose} />

      <MobileMenu>
        <CloseBtn show={showContent} onClick={() => handleClose()}>X</CloseBtn>
        <Nav>
          <NavList>
            <NavListElem>
              <NavListLink to="/products" onClick={() => handleClose()}>
                TEst
              </NavListLink>
            </NavListElem>
            <NavListElem>
              <NavListLink
                to="/products/desserts"
                onClick={() => handleClose()}
              >
                Test Des
              </NavListLink>
            </NavListElem>
            <NavListElem>
              <NavListLink to="/products/baking" onClick={() => handleClose()}>
                Test Bak
              </NavListLink>
            </NavListElem>
          </NavList>
        </Nav>
      </MobileMenu>
    </>
  );
};

import React, { useEffect, useState } from 'react';
import { MobileMenu, CloseBtn } from './BurgerModal.styled';
import {
  Nav,
  NavList,
  NavListElem,
  NavListLink,
} from 'components/Header/Header.styled';
import { ModalBackground } from '../BurgerModal/ModalBackground';

export const BurgerModal = ({isOpen, setIsOpen }) => {

    const [showContent, setShowContent] = useState(false)

    useEffect(() => {
      setShowContent(isOpen);
  }, [isOpen]);
  

  const handleClose = () => {
    // setIsOpen(false);
    setShowContent(false)
    setTimeout(() => {
      setIsOpen(false)
    }, 500)
  };

  return (
    <>
    
    {isOpen && <ModalBackground handleClose={handleClose} />}


      <MobileMenu show={showContent}>
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

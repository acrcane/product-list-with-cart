import React from 'react';
import { Nav, NavList, NavListElem, NavListLink } from './Navigation.styled';
export const Navigation = ({ handleClose }) => {
  return (
    <Nav>
      <NavList>
        <NavListElem>
          <NavListLink to="/products" onClick={() => handleClose}>
            TEst
          </NavListLink>
        </NavListElem>
        <NavListElem>
          <NavListLink to="/products/desserts" onClick={() => handleClose}>
            Test Des
          </NavListLink>
        </NavListElem>
        <NavListElem>
          <NavListLink to="/products/baking" onClick={() => handleClose}>
            Test Bak
          </NavListLink>
        </NavListElem>
      </NavList>
    </Nav>
  );
};

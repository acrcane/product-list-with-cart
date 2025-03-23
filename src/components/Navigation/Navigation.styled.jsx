import styled from "@xstyled/styled-components";
import { NavLink } from "react-router-dom";
export const Nav = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  @media only screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 20px;
  }
`;

export const NavListElem = styled.li``;

export const NavListLink = styled(NavLink)`
  text-decoration: none;
  color: var(--main-rose);
  font-size: 1.5em;
  font-weight: 500;
`;
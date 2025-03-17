import styled from "@xstyled/styled-components";
import { NavLink } from "react-router-dom";

export const Title = styled.h2`
font-size: 2.5em;
font-weight: 500;
`
export const Form = styled.form`
  background-color: var(--main-white);
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: var(--main-text);
`
export const Input = styled.input`
  padding: 12px;
  font-size: 14px;
  border: 1px solid var(--main-gray);
  border-radius: 4px;
  background-color: var(--main-white);
  color: var(--main-text);
  transition: border-color 0.3s ease;
  width: 100%;
  &:focus {
    border-color: var(--main-green);
    outline: none;
  }
  
  &::placeholder {
    color: var(--main-gray);
  }
`
export const Button = styled.button`
background-color: var(--main-green);
  color: var(--main-white);
  padding: 14px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: hsl(160, 47%, 60%);
  }

  &:active {
    background-color: hsl(160, 47%, 50%);
  }
`

export const ToRegLink = styled(NavLink)`
font-size: 1.5em;
color: var(--main-rose);
font-weight: 500;
text-decoration: none;
text-align: center;
`
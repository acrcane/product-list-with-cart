import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  padding: 20px 30px;
  height: 80px;
  background-color: var(--main-green);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.h2`
  font-size: 32px;
  color: var(--main-text);
`;
export const OpenModal = styled.button`
  border: none;
  outline: none;
  width: 42px;
  height: 42px;
  background-color: transparent;
  position: relative;
  &::before{
    content: '${(props) => props.$count}';
    position: absolute;
    font-size: 12px;
    width: 15px;
    height: 15px;
    background-color: var(--main-white);
    border-radius: 50%;
    z-index: 2;
    top: 2%;
    right: 2%;
    left: 2%;
    bottom: 2%;
    transform: translate(10%, 10%);
    color: var(--main-red);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const BtnSvg = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
  fill: var(--main-rose);
`;
export const SearchForm = styled.form`
width: 200px;
height: 40px;
background-color: transparent;
`
export const SearchInput = styled.input`
width: 150px;
height: 40px;
outline: none;
border: none;
border-radius: 15px;
background-color: var(--main-white);
`
export const SearchBtn = styled.button`
width: 50px;
height: 40px;
outline: none;
border: none;
border-radius: 15px;
background-color: var(--main-blue);
`
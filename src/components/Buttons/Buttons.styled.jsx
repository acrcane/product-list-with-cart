import styled from "styled-components";

//==============================================OPEN MODAL BUTON=============================================

export const OpenModal = styled.button`
  border: none;
  outline: none;
  width: 50px;
  height: 50px;
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

//==========================================ADDED BUTTON====================================================

export const AddBtn = styled.button`
position: absolute;
width: 235px;
height: 60px;
border-radius: 45px;
color: var(--main-rose);
transition: 0.2s ease-in-out;
top: 70%;
right: 50%;
left: 50%;
bottom: 50%;
transform: translate(-50%, -50%);
border: 1px solid var(--main-rose);
outline: none;
&:hover{
    background-color: var(--main-rose);
    color: var(--main-white);
}
@media only screen and (min-width: 768px){
    top: 50%;
    right: 50%;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, 0%);
}
`

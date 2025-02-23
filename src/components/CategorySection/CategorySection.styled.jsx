import styled, { keyframes } from "styled-components";


const slideTop = keyframes`
0% {

              transform: translateY(200px);
              opacity: 0;
    }
    100% {

              transform: translateY(0px);
              opacity: 1;
    }
`
export const Section = styled.section`
margin-top: 10px;
width: 100%;
height: 600px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 5px;
`

export const ShopContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 50%;
animation: ${slideTop} 0.9s cubic-bezier(0.470, 0.000, 0.745, 0.715) 0.2s both;
`

export const ShopImg = styled.img`
display: block;
object-fit: cover;
width: 50%;
/* height: 95%; */
/* border-radius: 10px; */
`

export const ShopInfoContainer = styled.div`
width: 50%;
height: 100%;
background-color: var(--main-theme);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const ShopTitle = styled.h2`
font-size: 1.7em;
font-weight: 600;
`

export const ShopBtn = styled.button`
width: 170px;
height: 60px;
border-radius: 50px;
outline: none;
border: 1px solid var(--main-rose);
background: transparent;
color: var(--main-text);
font-size: 22px;
transition: 0.4s ease-in-out;
&:hover, :focus{
    color: var(--main-white);
    background-color: var(--main-rose);

}
`

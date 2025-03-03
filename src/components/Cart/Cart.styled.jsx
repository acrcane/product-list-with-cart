import styled from "styled-components"


export const ImgContainer = styled.div`
width: 100%;
height: 245px;
border-radius: 15px;
border: 1px solid var(--main-rose);
`
export const Image = styled.picture`
width: 100%;
height: 100%;
object-fit: cover;
display: block;
border-radius: 15px;
`
export const ImgHelper = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
display: block;
border-radius: 15px;
`

export const ProductContainer = styled.div`
width: 100%;
color: var(--main-text);
margin-top: 45px;
display: flex;
flex-direction: column;
`
export const TypeOfProduct = styled.span`
    font-size: 12px;
 color: var(--main-gray);
`
export const ProductName = styled.span`
color: var(--main-text);
`
export const ProductPrice = styled.span`
color: var(--main-rose);
`
export const ButtonsContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-left:20px;
padding-right:20px;
position: absolute;
width: 235px;
height: 60px;
border-radius: 45px;
color: var(--main-text);
transition: 0.2s ease-in-out;
top: 70%;
right: 50%;
left: 50%;
bottom: 50%;
transform: translate(-50%, -50%);
border: 1px solid var(--main-rose);
outline: none;
/* z-index: 12; */
background-color: var(--main-rose);
@media only screen and (min-width: 768px){
    top: 50%;
    right: 50%;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, 0%);
}
`


export const AmoutSpan = styled.span`
display: block;
width: 30px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;

font-size: 2rem;
color: var(--main-white);
`

import styled from "styled-components";

export const List = styled.ul`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding: 20px 10px 0 10px;
gap: 20px;
flex: 1;
@media only screen and (min-width: 768px){
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
}
@media only screen and (min-width: 1440px){
    max-width: 1440px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}
`
export const ListItem = styled.li`
width: 320px;
height: 350px;
background-color: transparent;
position: relative;
z-index: 1;
@media only screen and (min-width: 768px){
    width: 340px;
    height: 370px;
}
`
export const ImgContainer = styled.div`
width: 100%;
height: 245px;
border-radius: 15px;
`
export const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
display: block;
border-radius: 15px;
`
export const AddBtn = styled.button`
position: absolute;
width: 155px;
height: 40px;
border-radius: 25px;
color: var(--main-text);
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
    color: var(--main-theme);
}
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
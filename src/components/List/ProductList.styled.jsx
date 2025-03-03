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
    gap: 80px;
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
    width: 410px;
    height: 430px;
}
`

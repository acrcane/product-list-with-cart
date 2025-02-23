import styled from "styled-components";

export const Main = styled.main`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
/* gap: 20px; */
flex: 1;
background-color: #fff;
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
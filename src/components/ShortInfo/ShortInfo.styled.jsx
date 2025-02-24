import styled from "styled-components";
import bg from '../../images/bg/notebook-paper-background.jpg'
export const Section = styled.section`
width: 100%;
height: 200px;
background-image: url(${bg});
background-repeat: no-repeat;
background-size: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
`

export const Container = styled.div`
background-color: transparent;
width: 150px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 3px;
`

export const Icon = styled.svg`
width: 44px;
height: 44px;
fill: var(--main-rose);
`

export const Text = styled.span`
font-size: 13px;
text-align: center;
color: var(--main-text);
line-height: 1.2;
`
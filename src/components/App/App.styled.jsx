import styled from "styled-components";

export const Wrapper = styled.main`
display: flex;
flex-direction: column;
width: 100%;
min-height: 100vh;
background-color: var(--main-theme);
@media only screen and (min-width: 1440px) {
    justify-content: center;
    align-items: center;
}
`
import styled from 'styled-components';
import bg from '../../images/bg/bg-main.webp';
export const Section = styled.section`
  margin-top: 0;
  width: 100%;
  height: 400px;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0%;
    right: 0%;
    left: 0%;
    bottom: 0%;
    background: rgba(0, 0, 0, 0.4);
  }
`;
export const HeroTitle = styled.h1`
  font-size: 3em;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-align: center;
  color: var(--main-title);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
  position: relative;
  display: inline-block;
  padding: 0.5em 1em;
  z-index: 1;
  border-radius: 5px;
  @media only screen and (min-width: 768px) {
    letter-spacing: 1px;
  }
  @media only screen and (min-width: 768px) {
    letter-spacing: 1.5px;
  }
`;

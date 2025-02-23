import React from 'react'
import { Section, Container, Icon, Text } from './ShortInfo.styled'
import icons from '../../icons/symbol-defs.svg'
export const ShortInfo = () => {
  return (
    <Section>
        <Container>
            <Icon><use href={`${icons}#icon-shop`} /></Icon>
            <Text>We have been open since 2005!</Text>
        </Container>
        <Container>
            <Icon><use href={`${icons}#icon-delivery-truck`} /></Icon>
            <Text>If the order arrives within 24 hours after purchase, delivery is free.</Text>
        </Container>
        <Container>
            <Icon><use href={`${icons}#icon-st-place`} /></Icon>
            <Text>First place in the "Best Pastry in the Solar System" competition!</Text>
        </Container>
        <Container>
            <Icon><use href={`${icons}#icon-calendar`} /></Icon>
            <Text>The online store is open 24/7.</Text>
        </Container>
    </Section>
  )
}

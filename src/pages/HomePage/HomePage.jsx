import React from 'react'
import { Main } from './HomePage.styled'
import { HeroSection } from '../../components/'
import { CategorySection } from '../../components/'
import { ShortInfo } from '../../components/'
const HomePage = () => {
  return (
    <>
      <Main>
        <HeroSection />
        <CategorySection />
        <ShortInfo />
      </Main>
    </>
  )
}

export default HomePage

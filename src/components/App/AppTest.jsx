import { OpenModal } from 'components/Buttons/Buttons.styled'
// import { ModalBackground } from '../Modal/BurgerModal/ModalBackground'
import React, {useState} from 'react'
import { BurgerModal } from 'components/Modal/BurgerModal/BurgerModal';
import { WrapperTest } from './App.styled';
import {countWords} from '../../task'

export const AppTest = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(true)
    }
    const handleClose = () => {
        setIsOpen(false)
    }
    // capitalizeWords("javaScript is awesome")
    countWords("I love programming in JavaScript")
  return (
    <WrapperTest>
        {isOpen && <BurgerModal setIsOpen={setIsOpen} handleClose={handleClose}/>}
        <OpenModal onClick={() => handleOpen()}>CLICK TO OPEN</OpenModal>
    </WrapperTest>
  )
}
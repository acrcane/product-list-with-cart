import React from 'react'
import { Form, Label, Input, Button } from './Forms.styled'
import { useDispatch } from 'react-redux'
import { apiRegisterUser } from '../../redux/auth/authSlice'

export const RegistrationForm = () => {
    const dispatch = useDispatch()
    const handleSubmit = e => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const name = formData.get('name').trim().toLowerCase()
        const email = formData.get('email').trim().toLowerCase()
        const password = formData.get('password').replace(/[^a-zA-Z0-9]/g, '')
        console.log(name, email, password);
        const data = {
            name,
            email,
            password
        }
        dispatch(apiRegisterUser(data))
        e.currentTarget.reset()
    }
  return (
    <Form onSubmit={handleSubmit}>
        <Label htmlFor='email'>
            <Input type='email' name='email' id='email' placeholder='Enter email'/>
        </Label>
        <Label htmlFor='name'>
            <Input type='text' name='name' id='name' placeholder='Enter your name'/>
        </Label>
        <Label htmlFor='password'>
            <Input type='password' name='password' id='password' placeholder='Enter password'/>
        </Label>
        {/* <Label htmlFor='confirmPassword'>
            <Input type='password' name='confirmPassword' id='confirmPassword' placeholder='Confirm password'/>
        </Label> */}
        <Button type='submit'>Submit</Button>
    </Form>
  )
}

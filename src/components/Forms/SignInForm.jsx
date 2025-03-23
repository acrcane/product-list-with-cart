import React from 'react'
import { Form, Input, Label, Title, Button,ToRegLink } from './Forms.styled'
import { useDispatch } from 'react-redux'
import { apiLoginUser } from '../../redux/auth/authSlice'

export const SignInForm = () => {
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')
    const data = {
      email,
      password
    }
  dispatch(apiLoginUser(data))
  e.currentTarget.reset()
  }
  return (
    <Form onSubmit={handleSubmit}>
        <Title>Sign In</Title>
        <Label htmlFor='email'>
            <Input type='email' name='email' id='email' placeholder='Enter email'/>
        </Label>
        <Label htmlFor='password'>
            <Input type='password' name='password' id='password' placeholder='Enter password'/>
        </Label>
        <Button type='submit'>Sign In</Button>
        <ToRegLink to='/registration'>If you don't have an account yet</ToRegLink>
    </Form>
  )
}
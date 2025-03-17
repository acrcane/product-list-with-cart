import React from 'react'
import { Form, Input, Label, Title, Button,ToRegLink } from './Forms.styled'

export const SignInForm = () => {
  return (
    <Form>
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
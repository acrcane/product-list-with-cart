import React from 'react'
import { Form, Label, Input, Button } from './Forms.styled'

export const RegistrationForm = () => {
  return (
    <Form>
        <Label htmlFor='email'>
            <Input type='email' name='email' id='email' placeholder='Enter email'/>
        </Label>
        <Label htmlFor='name'>
            <Input type='text' name='name' id='name' placeholder='Enter your name'/>
        </Label>
        <Label htmlFor='password'>
            <Input type='password' name='password' id='password' placeholder='Enter password'/>
        </Label>
        <Label htmlFor='confirmPassword'>
            <Input type='password' name='confirmPassword' id='confirmPassword' placeholder='Confirm password'/>
        </Label>
        <Button type='submit'>Submit</Button>
    </Form>
  )
}

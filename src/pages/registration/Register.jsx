import React from 'react'
import styled from 'styled-components'


const Registercontainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 85px);
    background:
    linear-gradient(rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.5)),   url("https://images.pexels.com/photos/317355/pexels-photo-317355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    background-size:cover;
`
const Form = styled.form`
display:flex;
flex-direction: column;
&>input{
    border: none;
    width: 100%;
    height: 30px;
    margin: 10px 0;
    font-size: 18px;
    border-radius: 2px;
    font-family: 'Lora';
    padding: 5px;
}
&>input::placeholder
{
    font-size: 14px;
    color: #969393;
}
&>label{
font-size: 18px;
font-family: 'Lora';
}

&>button
{
    background-color:teal;
    padding: 0.3em 1.5em;
    border:none;
    border-radius: 7px;
    color: white;
    margin: 30px 0px;
    font-size: 20px;
    font-family: 'lora';
}
`
const FormHeader = styled.h3`
    font-size: 60px;
    font-weight: 200;
    font-family: 'Lora';
    margin: 20px 0;
    `

function Register() {
  return (
    <Registercontainer>
    <Form>
        <FormHeader>Register</FormHeader>
        <label htmlFor="username">Username</label>
        <input type="text" name="" id="username" placeholder='johndoe' />
        <label htmlFor="email">Email</label>
        <input type="email" name="" id="email" placeholder='doe@gmail.com' />
        <label htmlFor="password">Password</label>
        <input type="password" name="" id="password" placeholder='Enter your password' />
        <button>Register</button>
    </Form>
   
    </Registercontainer>
  )
}

export default Register
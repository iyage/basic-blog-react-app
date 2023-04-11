import React from "react";
import { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Logincontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 85px);
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/768473/pexels-photo-768473.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
  background-size: cover;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  & > input {
    border: none;
    width: 100%;
    height: 30px;
    margin: 10px 0;
    font-size: 18px;
    border-radius: 2px;
    font-family: "Lora";
    padding: 5px;
  }
  & > input::placeholder {
    font-size: 14px;
    color: #969393;
  }
  & > label {
    font-size: 18px;
    font-family: "Lora";
  }

  & > button {
    background-color: #e6375a;
    padding: 0.3em 1.5em;
    border: none;
    border-radius: 7px;
    color: white;
    margin: 10 0px;
    font-size: 20px;
    font-family: "lora";
    cursor: pointer;
  }
  & > a {
    background-color: teal;
    padding: 0.3em 1.5em;
    border: none;
    border-radius: 7px;
    color: white;
    margin-top: 20px;
    font-size: 20px;
    font-family: "lora";
    text-decoration: none;
    text-align: center;
  }
  & > hr {
    color: gray;
    background-color: gray;
    height: 2px;
    border-width: 0;
  }
  & > h5 {
    font-size: 16px;
    font-weight: 300;
    margin-top: 7px;
    color: green;
  }
`;
const FormHeader = styled.h3`
  font-size: 60px;
  font-weight: 200;
  font-family: "Lora";
  margin: 20px 0;
`;

function Login({ setAuth, userList, setUser }) {
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  function handLeLogin(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const user = userList.filter((user) => {
      if (user.email === email && user.password === password) {
        return user;
      }
    });
    if (user.length > 0) {
      setUser(user[0]);
      setAuth(true);
      if (location.state?.from) {
        navigate(location.state.from, { replace: true });
      } else {
        navigate("/");
      }
    }
  }
  return (
    <Logincontainer>
      <Form>
        <FormHeader>Login</FormHeader>
        <label htmlFor="email">Email</label>
        <input
          ref={emailRef}
          type="email"
          name=""
          id="email"
          placeholder="Enter Your email"
        />
        <label htmlFor="password">Password</label>
        <input
          ref={passwordRef}
          type="password"
          name=""
          id="password"
          placeholder="Enter your password"
        />
        <button
          onClick={(e) => {
            handLeLogin(e);
          }}>
          Login
        </button>
        <h5>No Account?</h5>
        <hr />

        <Link to="/register">Register</Link>
      </Form>
    </Logincontainer>
  );
}

export default Login;

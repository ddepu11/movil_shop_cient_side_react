import React, { useState } from "react";
import styled from "styled-components";
import { Hero } from ".";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { customUserLogin } from "../actions/user_actions";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = (e) => {
    const { value, name } = e.target;
    name === "email" ? setEmail(value) : setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(customUserLogin(email, password));
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <Hero title="login" />
      <Wrapper className="w-960 flex">
        <div>
          <h2>Sign in to Movil Shop</h2>
          <button
            onClick={() => loginWithRedirect()}
            className="google-btn flex"
          >
            <AiOutlineGoogle className="google" />
            <span>Sign in with Google</span>
          </button>
          <div className="or flex">
            <div className="left"></div>
            <span>Or</span>
            <div className="right"></div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="username">Email Address</label>
              <input
                value={email}
                onChange={handleInput}
                type="email"
                name="email"
                id="username"
              />
            </div>
            <div className="form-control">
              <div className="pwd-label flex">
                <label htmlFor="password">Password</label>
                <Link to="/forget-password">Forget Password?</Link>
              </div>
              <input
                value={password}
                onChange={handleInput}
                type="password"
                name="password"
                id="password"
              />
            </div>
            <button className="sign-in-btn">Sign In</button>
          </form>
          <div className="or flex">
            <div className="left"></div>
            <span>Or</span>
            <div className="right"></div>
          </div>
          <Link className="sign-up-btn" to="/sign-up">
            Don't have an account? Sign Up Now !
          </Link>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.main`
  padding: 40px 0;
  h2 {
    font-size: 2.2em;
    padding: 15px 0;
  }
  .google-btn {
    font-size: 1em;
    background: #3284ff;
    color: white;
    padding: 10px 60px 10px 12px;
    border-radius: 5px;
    .google {
      font-size: 1.8em;
    }
    span {
      margin-left: 25px;
    }
  }
  .or {
    padding: 15px 0;
    color: #555;
    justify-content: space-between;
    .left,
    .right {
      height: 1.6px;
      width: 44%;
      background-color: #888;
      border-radius: 5px;
    }
  }
  form {
    .form-control {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      label {
        font-size: 1.3em;
        padding: 8px 0;
      }
      input {
        background: #e2dcdc;
        padding: 10px 5px;
        border-radius: 5px;
        font-size: 1.2em;
      }
      .pwd-label {
        justify-content: space-between;
      }
    }
    .sign-in-btn {
      padding: 10px 40px;
      font-size: 1.2em;
      background-color: #222222;
      color: white;
      margin-top: 12px;
      width: 100%;
    }
  }
  .sign-up-btn {
    padding: 10px 40px;
    font-size: 1.2em;
    background-color: #2a5be2;
    color: #ffffff;
    margin-top: 12px;
    width: 100%;
  }
`;

export default Login;

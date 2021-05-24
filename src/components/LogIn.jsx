import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Hero } from ".";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { customUserLogin } from "../actions/user_actions";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { loginWithRedirect } = useAuth0();
  const dispatch = useDispatch();

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { value, name } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  // Form validation
  const formValidation = () => {
    // Email address validation

    let email = userCredentials.email;

    function validateEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    !validateEmail(email) &&
      showMessage(emailRef, "Invalid email address", "error");

    email === "" && showMessage(emailRef, "email cannot be empty", "error");

    // **************** Email Validation ends  **********************

    // Password  validation
    let password = userCredentials.password;

    password.length > 20 &&
      showMessage(
        passwordRef,
        "password's length cant be greater then 20 ",
        "error"
      );

    password.length < 6 &&
      showMessage(
        passwordRef,
        "password's length cant be less then 6 ",
        "error"
      );

    password === "" &&
      showMessage(passwordRef, "password cannot be empty", "error");
    // **************** Password Validation ends  **********************
  };

  // Shows error or success message
  const showMessage = (ref, message, className) => {
    ref.current.innerText = message;
    ref.current.classList.add(className);

    setTimeout(() => {
      ref.current.innerText = "";
      ref.current.classList.remove(className);
    }, 4000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = userCredentials;
    formValidation();
    if (email && password) {
      dispatch(customUserLogin(email, password));
      setUserCredentials({ password: "", email: "" });
    }
  };

  return (
    <>
      <Hero title="login" />
      <Wrapper className="w-960 flex">
        <div>
          <h2>Logn in to Movil Shop</h2>
          <button
            onClick={() => loginWithRedirect()}
            className="google-btn flex"
          >
            <AiOutlineGoogle className="google" />
            <span>Log in with Google</span>
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
                value={userCredentials.email}
                onChange={handleInput}
                type="text"
                name="email"
                id="username"
              />
              <p ref={emailRef} className="message"></p>
            </div>
            <div className="form-control">
              <div className="pwd-label flex">
                <label htmlFor="password">Password</label>
                <Link to="/forget-password">Forget Password?</Link>
              </div>
              <input
                value={userCredentials.password}
                onChange={handleInput}
                type="password"
                name="password"
                id="password"
              />
              <p ref={passwordRef} className="message"></p>
            </div>
            <button className="sign-in-btn">Log In</button>
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
      .message.error {
        color: red;
        font-size: 1.2em;
      }
      .message.success {
        color: green;
        font-size: 1.2em;
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

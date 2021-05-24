import React, { useState, useRef } from "react";
import styled from "styled-components";

const SignUp = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const [signUpCredentials, setSignUpCredentials] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInput = (e) => {
    const { value, name } = e.target;
    setSignUpCredentials({ ...signUpCredentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (signUpCredentials.firstName === "") {
      showMessage(firstNameRef, "first name cannot be empty", "error");
    }

    if (signUpCredentials.lastName === "") {
      showMessage(lastNameRef, "last name cannot be empty", "error");
    }

    if (signUpCredentials.phoneNumber === "") {
      showMessage(phoneNumberRef, "phone number cannot be empty", "error");
    }

    if (signUpCredentials.email === "") {
      showMessage(emailRef, "email cannot be empty", "error");
    }

    if (signUpCredentials.password === "") {
      showMessage(passwordRef, "password cannot be empty", "error");
    }

    if (signUpCredentials.confirmPassword === "") {
      showMessage(
        confirmPasswordRef,
        "confirm password cannot be empty",
        "error"
      );
    }
  };

  const showMessage = (ref, message, className) => {
    ref.current.innerText = message;
    ref.current.classList.add(className);

    setTimeout(() => {
      ref.current.innerText = "";
      ref.current.classList.remove(className);
    }, 4000);
  };

  return (
    <>
      <Wrapper className="w-960 ">
        <h1>Get your free MovilShop account now</h1>
        <form onSubmit={handleSubmit}>
          <div className="row flex">
            <div className="form-control ">
              <label htmlFor="first_name">First Name</label>
              <input
                value={signUpCredentials.firstName}
                onChange={handleInput}
                type="text"
                id="first_name"
                name="firstName"
              />
              <p ref={firstNameRef} className="message"></p>
            </div>
            <div className="form-control">
              <label htmlFor="last_name">Last Name</label>
              <input
                value={signUpCredentials.lastName}
                onChange={handleInput}
                type="text"
                id="last_name"
                name="lastName"
              />
              <p ref={lastNameRef} className="message"></p>
            </div>
          </div>

          <div className="row flex">
            <div className="form-control">
              <label htmlFor="phone_number">Phone Number</label>
              <input
                value={signUpCredentials.phoneNumber}
                onChange={handleInput}
                type="text"
                id="phone_number"
                name="phoneNumber"
              />
              <p ref={phoneNumberRef} className="message"></p>
            </div>
            <div className="form-control">
              <label htmlFor="email">Email Address</label>
              <input
                value={signUpCredentials.email}
                onChange={handleInput}
                type="email"
                id="email"
                name="email"
              />
              <p ref={emailRef} className="message"></p>
            </div>
          </div>

          <div className="row flex">
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input
                value={signUpCredentials.password}
                onChange={handleInput}
                type="password"
                id="password"
                name="password"
              />
              <p ref={passwordRef} className="message"></p>
            </div>

            <div className="form-control">
              <label htmlFor="confirm_password">Confirm Password</label>
              <input
                value={signUpCredentials.confirmPassword}
                onChange={handleInput}
                type="password"
                id="confirm_password"
                name="confirmPassword"
              />
              <p ref={confirmPasswordRef} className="message"></p>
            </div>
          </div>
          <button className="sign-up-btn">Create Account</button>
        </form>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.main`
  padding: 40px 0;
  h1 {
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #333;
    font-size: 2em;
  }
  form {
    .row {
      justify-content: space-between;
      margin: 20px 0;
      .form-control {
        display: flex;
        flex-direction: column;
        width: 100%;
        label {
          font-size: 1.3em;
          padding: 8px 0;
          color: #222;
        }
        input {
          background: #e2dcdc;
          padding: 10px 5px;
          border-radius: 5px;
          font-size: 1.1em;
          width: 65%;
        }
        .message.error {
          color: red;
          font-size: 1.2em;
        }
      }
    }
    .sign-up-btn {
      padding: 8px 10px;
      font-size: 1.2em;
      background-color: #2a5be2;
      color: white;
      margin-top: 12px;
      width: 30%;
    }
  }
`;

export default SignUp;

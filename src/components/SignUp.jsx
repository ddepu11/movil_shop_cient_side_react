import React from "react";
import styled from "styled-components";

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Wrapper className="w-960 ">
        <h1>Get your free MovilShop account now</h1>
        <form onSubmit={handleSubmit}>
          <div className="row flex">
            <div className="form-control ">
              <label htmlFor="first_name">First Name</label>
              <input type="text" id="first_name" />
            </div>
            <div className="form-control">
              <label htmlFor="last_name">Last Name</label>
              <input type="text" id="last_name" />
            </div>
          </div>

          <div className="row flex">
            <div className="form-control">
              <label htmlFor="phone_number">Phone Number</label>
              <input type="text" id="phone_number" />
            </div>
            <div className="form-control">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" />
            </div>
          </div>

          <div className="row flex">
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>

            <div className="form-control">
              <label htmlFor="confirm_password">Confirm Password</label>
              <input type="password" id="confirm_password" />
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
      margin: 50px 0;
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
      }
    }
    .sign-up-btn {
      padding: 8px 10px;
      font-size: 1.2em;
      background-color: #e73306;
      color: white;
      margin-top: 12px;
      width: 30%;
    }
  }
`;

export default SignUp;

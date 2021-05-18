import React from "react";
import style from "styled-components";
import { Hero } from ".";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Hero title="about" />
      <Wrapper className="w-960">
        <div>
          <h2>Sign in to Movil Shop</h2>
          <button>
            <FcGoogle />
            Sign in with Google
          </button>
          <div className="or">
            <div className="left"></div>
            <span>or</span>
            <div className="right"></div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="username">Email Address</label>
              <input type="email" id="username" />
            </div>
            <div className="form-control">
              <div className="pwd-label">
                <label htmlFor="password">Password</label>
                <Link to="/forget-password">Forget Password?</Link>
              </div>
              <input type="password" id="password" />
            </div>
            <button className="sign-in-btn">Sign In</button>
          </form>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = style.main``;
export default Login;

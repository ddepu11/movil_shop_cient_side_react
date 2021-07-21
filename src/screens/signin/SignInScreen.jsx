import React from 'react';
import styled from 'styled-components';
import { AiOutlineGoogle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import FormControl from '../../components/FormControl';
import Button from '../../components/Button';
import SignInScreenLogic from './logic/SignInScreenLogic';
import CircleLoader from '../../components/CircleLoader';

const SignInScreen = () => {
  const {
    userLoading,
    handleSubmit,
    handleInput,
    loginWithRedirect,
    userCredentials,
    emailValidationMessageTag,
    passwordValidationMessageTag,
  } = SignInScreenLogic();

  return (
    <>
      {userLoading ? (
        <CircleLoader
          bgColor="var(--secondary-color)"
          wrapperH="80vh"
          spW="90px"
          spH="90px"
          cirW="90px"
          cirH="90px"
        />
      ) : (
        <Wrapper className="w-960 flex">
          <div>
            <h2>Sign In in to Movil Shop</h2>
            <Button
              bgColor="var(--tertiary-color)"
              pt="8px"
              pr="10px"
              pb="8px"
              pl="10px"
              width="100%"
              borderRadius="5px"
              fs="1em"
              handleClick={() => loginWithRedirect()}
              bSh=""
            >
              <div className="center flex">
                <AiOutlineGoogle className="google" />
                <span>Sign in with Google</span>
              </div>
            </Button>

            <div className="or flex">
              <div className="left" />
              <span>Or</span>
              <div className="right" />
            </div>

            <form>
              <FormControl
                inputValue={userCredentials.email}
                handleInput={handleInput}
                id="username"
                placeholder="Please enter your email address."
                refObj={emailValidationMessageTag}
                type="text"
                name="email"
                label="Email Address"
              />

              <FormControl
                inputValue={userCredentials.password}
                handleInput={handleInput}
                id="password"
                placeholder="Please enter your email address."
                refObj={passwordValidationMessageTag}
                type="password"
                name="password"
                label="Password"
              />

              <Button
                pt="8px"
                pb="8px"
                pl="0px"
                pr="0px"
                mt="12px"
                fs="1.2em"
                width="100%"
                bgColor="var(--success-color)"
                bSh=""
                tr=""
                handleClick={handleSubmit}
              >
                Log In
              </Button>
            </form>

            <div className="or flex">
              <div className="left" />
              <span>Or</span>
              <div className="right" />
            </div>

            <Link className="sign-up-btn" to="/sign-up">
              <Button
                pt="8px"
                pb="8px"
                pl="30px"
                pr="30px"
                mt="12px"
                fs="1.15em"
                width="100%"
                bgColor="var(--medium-dark-color)"
                bSh=""
                tr=""
                handleClick={handleSubmit}
              >
                Don&apos;t have an account? Sign Up Now !
              </Button>
            </Link>
          </div>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.main`
  padding: 10px 0 40px 0;

  div {
    h2 {
      font-size: 2em;
      padding: 15px 0;
      color: var(--little-dark-color);
      text-align: center;
    }

    button {
      .center {
        .google {
          font-size: 1.6em;
          margin-right: 15px;
        }

        span {
          font-size: 1.25em;
        }
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
      input {
        font-size: 1.1em;
      }

      label {
        font-size: 1.2em;
      }
    }

    .sign-up-btn {
    }
  }

  @media screen and (max-width: 450px) {
    padding: 5px 10px 40px;

    div {
      h2 {
        font-size: 1.8em;
        padding: 5px 0 10px;
      }

      button {
        padding: 5px 0px !important;
        .center {
          .google {
            font-size: 1.4em;
            margin-right: 15px;
          }

          span {
            font-size: 1.1em;
          }
        }
      }

      .or {
        padding: 15px 0;
        .left,
        .right {
          height: 1.6px;
          width: 44%;
          border-radius: 5px;
        }
      }

      form {
        label {
          font-size: 1.1em !important;
        }

        input {
          font-size: 1em;
        }
      }

      .sign-up-btn {
        button {
          font-size: 1em !important;
          padding: 5px 10px !important;
        }
      }
    }
  }

  @media screen and (max-width: 350px) {
    div {
      h2 {
        font-size: 1.45em;
        padding: 6px 0 12px;
      }

      .sign-up-btn {
        button {
          font-size: 1em !important;
          padding: 5px 10px !important;
          border-radius: 5px !important;
        }
      }
    }
  }
`;

export default SignInScreen;

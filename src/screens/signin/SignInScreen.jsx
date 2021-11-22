import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import FormControl from '../../components/FormControl';
import Button from '../../components/Button';
import SignInScreenLogic from './logic/SignInScreenLogic';
import CircleLoader from '../../components/CircleLoader';

const SignInScreen = () => {
  const {
    userLoading,
    handleSubmit,
    handleInput,
    userCredentials,
    emailValidationMessageTag,
    passwordValidationMessageTag,
    handleLoginViaGoogle,
    googleAuthLoading,
    loginAsRanomUser,
    loginAsRandomSeller,
    loginAsAdmin,
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
              pt="8px"
              pb="8px"
              pl="10px"
              pr="10px"
              width="100%"
              bgColor="var(--light-color)"
              bSh="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              color="var(--dark-color)"
              handleClick={handleLoginViaGoogle}
            >
              {googleAuthLoading ? (
                <CircleLoader spH="30px" spW="30px" cirH="30px" cirW="30px" />
              ) : (
                <div className="google_center flex">
                  <FcGoogle />
                  <span>Log in via google</span>
                </div>
              )}
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
                pt="7px"
                pb="7px"
                pl="0px"
                pr="0px"
                mt="12px"
                fs="1.1em"
                width="100%"
                bgColor="var(--success-color)"
                bSh=""
                tr=""
                handleClick={handleSubmit}
              >
                Log In
              </Button>

              <div className="random_user_admin_login_btns flex">
                <Button
                  pt="8px"
                  pb="8px"
                  pl="0px"
                  pr="0px"
                  mt="12px"
                  mr="5px"
                  fs="1em"
                  width="49%"
                  bgColor="var(--tertiary-color)"
                  bSh=""
                  tr=""
                  handleClick={loginAsRanomUser}
                >
                  Log in as random user
                </Button>

                <Button
                  pt="8px"
                  pb="8px"
                  pl="0px"
                  pr="0px"
                  mt="12px"
                  fs="1em"
                  width="49%"
                  bgColor="var(--little-dark-color)"
                  bSh=""
                  tr=""
                  handleClick={loginAsRandomSeller}
                >
                  Log in as random seller
                </Button>
              </div>

              <Button
                pt="7px"
                pb="7px"
                pl="0px"
                pr="0px"
                mt="12px"
                fs="1em"
                width="100%"
                bgColor="var(--secondary-color)"
                bSh=""
                tr=""
                handleClick={loginAsAdmin}
              >
                Log In as admin
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

    .or {
      padding: 18px 0 0px;
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

    .google_center {
      font-size: 1.25em;

      span {
        margin-left: 20px;
      }
    }

    button {
      transition: all 0.5s ease;
    }

    button:hover {
      transform: scale(1.05) translateY(-1px);
    }
  }

  @media screen and (max-width: 450px) {
    padding: 5px 4px 25px;

    div {
      h2 {
        font-size: 1.7em;
        padding: 8px 0 15px;
      }

      .or {
        padding: 18px 0 0px;
        .left,
        .right {
          height: 1.6px;
          width: 44%;
          border-radius: 5px;
        }
      }

      form {
        button {
          padding: 4px 0px !important;
        }
      }

      .sign-up-btn {
        button {
          font-size: 1em !important;
          padding: 9px 10px !important;
        }
      }

      .random_user_admin_login_btns {
        flex-direction: column;

        button {
          width: 100% !important;
        }
      }
    }
  }

  @media screen and (max-width: 350px) {
    div {
      h2 {
        font-size: 1.6em;
        padding: 6px 0 12px;
      }

      .sign-up-btn {
        button {
          font-size: 0.95em !important;
          padding: 6px 5px !important;
          border-radius: 5px !important;
        }
      }
    }
  }
`;

export default SignInScreen;

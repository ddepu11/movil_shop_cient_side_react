import React from 'react';
import styled from 'styled-components';
import AsideScreen from './AccountAsideScreen';
import FormFieldUpdate from '../../components/FormFieldUpdate';
import Button from '../../components/Button';
import Hero from '../../components/Hero';
import AccountScreenLogic from './logic/AccountScreenLogic';
import CircleLoader from '../../components/CircleLoader';

const AccountScreen = () => {
  const {
    updateInfo,
    cancelUpdate,
    handleInput,
    initiateUpdateProcess,
    wannaEdit,
    gender,
    userLoading,
    firstName,
    lastName,
    email,
    phoneNumber,
    info,
    firstNameValidationMessageTag,
    lastNameValidationMessageTag,
    emailValidationMessageTag,
    phoneNumberValidationMessageTag,
    passwordValidationMessageTag,
    confirmPasswordValidationMessageTag,
  } = AccountScreenLogic();

  return (
    <>
      <Hero title="account" />

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
        <Wrapper className="w-960">
          <header>
            <h1>
              Hello {firstName} {lastName}
            </h1>
          </header>

          <AsideScreen />

          <main>
            <FormFieldUpdate
              heading="First Name:"
              wannaEdit={wannaEdit}
              inputValue={info.firstName}
              type="text"
              inputName="firstName"
              handleInput={handleInput}
              refObj={firstNameValidationMessageTag}
              spanInnerText={firstName}
            />

            <FormFieldUpdate
              heading="Last Name:"
              wannaEdit={wannaEdit}
              inputValue={info.lastName}
              type="text"
              inputName="lastName"
              handleInput={handleInput}
              refObj={lastNameValidationMessageTag}
              spanInnerText={lastName}
            />

            <div className="gender_row flex">
              <h4>Gender:</h4>
              <span>{gender}</span>
            </div>

            <FormFieldUpdate
              heading="Email:"
              wannaEdit={wannaEdit}
              inputValue={info.email}
              type="email"
              inputName="email"
              handleInput={handleInput}
              refObj={emailValidationMessageTag}
              spanInnerText={email}
            />

            <FormFieldUpdate
              heading="Phone Number:"
              wannaEdit={wannaEdit}
              inputValue={String(info.phoneNumber)}
              type="text"
              inputName="phoneNumber"
              handleInput={handleInput}
              refObj={phoneNumberValidationMessageTag}
              spanInnerText={String(phoneNumber)}
            />

            <FormFieldUpdate
              heading="Password:"
              wannaEdit={wannaEdit}
              inputValue={info.password}
              type="password"
              inputName="password"
              handleInput={handleInput}
              refObj={passwordValidationMessageTag}
              spanInnerText="*************"
            />

            {wannaEdit && (
              <FormFieldUpdate
                heading="Confirm Password:"
                wannaEdit={wannaEdit}
                inputValue={info.confirmPassword}
                type="password"
                inputName="confirmPassword"
                handleInput={handleInput}
                refObj={confirmPasswordValidationMessageTag}
                spanInnerText="*************"
              />
            )}

            {/* Buttons */}
            {!wannaEdit ? (
              <Button
                pt="10px"
                pb="10px"
                pl="20px"
                pr="20px"
                bgColor="var(--tertiary-color)"
                color="white"
                handleClick={initiateUpdateProcess}
                bSh="rgba(0, 0, 0, 0.3) 0px 10px 20px, rgba(0, 0, 0, 0.22) 0px 10px 12px"
              >
                Wanna Update your information??
              </Button>
            ) : (
              <>
                <Button
                  pt="10px"
                  pb="10px"
                  pl="20px"
                  pr="20px"
                  mr="10px"
                  handleClick={updateInfo}
                  bgColor="var(--success-color)"
                >
                  Update!!!
                </Button>
                <Button
                  pt="10px"
                  pb="10px"
                  pl="20px"
                  pr="20px"
                  mr="10px"
                  handleClick={cancelUpdate}
                  bgColor="var(--danger-color)"
                >
                  Cancel
                </Button>
              </>
            )}
            {/* Button Ends */}
          </main>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.main`
  padding: 25px 10px 40px;
  display: grid;
  grid-template-columns: repeat(3, minmax(50px, auto));
  grid-template-rows: minmax(50px, auto);
  grid-template-areas: 'h h h' 'as m m';

  header {
    grid-area: h;
    padding: 0px 0 50px;

    h1 {
      font-size: 2.5em;
      color: #444;
      letter-spacing: 4px;
      text-transform: capitalize;
    }
  }

  main {
    grid-area: m;
    padding: 5px 15px 20px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

    .gender_row {
      justify-content: space-between;
      padding: 0px 0 30px;

      h4 {
        font-size: 1.2em;
        color: #444;
        letter-spacing: 2px;
      }

      span {
        font-size: 1em;
        color: #333;
        letter-spacing: 1px;
        display: block;
        width: 38%;
      }
    }

    .update_btn:hover,
    .cancel_btn:hover {
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 744px) {
    grid-template-areas: 'h h h' 'as as as' 'm m m';
    padding: 15px 10px 20px;

    header {
      padding: 10px 0 40px;

      h1 {
        text-align: center;
        font-size: 2em;
        letter-spacing: 3px;
      }
    }

    main {
      padding: 15px 15px 20px;
      margin-top: 15px;

      .gender_row {
        align-items: flex-start;
        flex-direction: column;
        padding: 0px 0 25px;
      }

      button:hover {
        transform: scale(1.05);
        transition: transform 0.5s ease;
      }

      button {
        margin-top: 10px !important;
        width: 100% !important;
        padding: 8px 0 !important;
      }
    }
  }
`;

export default AccountScreen;

import setValidationMessage from './setValidationMessage';

const validateForm = (formData, setTimeOutId, allValidationMessageTags) => {
  const {
    firstNameValidationMessageTag,
    lastNameValidationMessageTag,
    passwordValidationMessageTag,
    phoneNumberValidationMessageTag,
    emailValidationMessageTag,
    confirmPasswordValidationMessageTag,
    genderValidationMessageTag,
    dpValidationMessageTag,
  } = allValidationMessageTags;

  let erroFlag = false;

  // First name validation
  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    confirmPassword,
    gender,
    dp,
  } = formData;

  if (firstName.length > 20) {
    setValidationMessage(
      firstNameValidationMessageTag,
      'first name is too lengthy',
      'error',
      setTimeOutId
    );
    erroFlag = true;
  }

  if (firstName.length < 2) {
    setValidationMessage(
      firstNameValidationMessageTag,
      'first name is too short',
      'error',
      setTimeOutId
    );
    erroFlag = true;
  }

  if (firstName === '') {
    setValidationMessage(
      firstNameValidationMessageTag,
      'first name cannot be empty',
      'error',
      setTimeOutId
    );
    erroFlag = true;
  }

  // lastName validation

  if (lastName.length > 20) {
    setValidationMessage(
      lastNameValidationMessageTag,
      'last name is too lengthy',
      'error',
      setTimeOutId
    );
    erroFlag = true;
  }

  if (lastName.length < 2) {
    setValidationMessage(
      lastNameValidationMessageTag,
      'last name is too short',
      'error',
      setTimeOutId
    );
    erroFlag = true;
  }

  if (lastName === '') {
    setValidationMessage(
      lastNameValidationMessageTag,
      'last name cannot be empty',
      'error',
      setTimeOutId
    );
    erroFlag = true;
  }

  // **************** LN Validation ends  **********************
  // Gender validation
  if (gender === '') {
    setValidationMessage(
      genderValidationMessageTag,
      'Please select your gender!!!',
      'error',
      setTimeOutId
    );
    erroFlag = true;
  }

  // #############

  // Phone Number Validation

  if (phoneNumber.length > 10 || phoneNumber.length < 10) {
    setValidationMessage(
      phoneNumberValidationMessageTag,
      'Min and Maximum 10 digits allowed',
      'error',
      setTimeOutId
    );
    erroFlag = true;
  }

  if (!/^\d+$/.test(phoneNumber)) {
    setValidationMessage(
      phoneNumberValidationMessageTag,
      'Only numeric values allowed',
      'error',
      setTimeOutId
    );
    erroFlag = true;
  }

  if (phoneNumber === '') {
    setValidationMessage(
      phoneNumberValidationMessageTag,
      'phone number cannot be empty',
      'error',
      setTimeOutId
    );
    erroFlag = true;
  }

  if (phoneNumber.length > 10 || phoneNumber.length < 10) {
    setValidationMessage(
      phoneNumberValidationMessageTag,
      'Min and Maximum 10 digits allowed',
      'error',
      setTimeOutId
    );
    erroFlag = true;
  }

  if (!/^\d+$/.test(phoneNumber)) {
    setValidationMessage(
      phoneNumberValidationMessageTag,
      'Only numeric values allowed',
      'error',
      setTimeOutId
    );
    erroFlag = true;
  }

  if (phoneNumber === '') {
    setValidationMessage(
      phoneNumberValidationMessageTag,
      'phone number cannot be empty',
      'error',
      setTimeOutId
    );
    erroFlag = true;
  }

  // **************** PN Validation ends  **********************

  // Email address validation

  const validateEmail = () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  if (email === '') {
    setValidationMessage(
      emailValidationMessageTag,
      'email cannot be empty',
      'error',
      setTimeOutId
    );
    erroFlag = true;
  }

  if (!validateEmail()) {
    setValidationMessage(
      emailValidationMessageTag,
      'Invalid email address',
      'error',
      setTimeOutId
    );
    erroFlag = true;
  }

  // **************** Email Validation ends  **********************

  // Password  validation

  // if (password.length > 20) {
  //   setValidationMessage(
  //     passwordValidationMessageTag,
  //     "password's length cant be greater then 20 ",
  //     'error',
  //     setTimeOutId
  //   );
  //   erroFlag = true;
  // }

  if (password.length < 6) {
    setValidationMessage(
      passwordValidationMessageTag,
      "password's length cant be less then 6 ",
      'error',
      setTimeOutId
    );
    erroFlag = true;
  }

  if (password === '') {
    setValidationMessage(
      passwordValidationMessageTag,
      'password cannot be empty',
      'error',
      setTimeOutId
    );
    erroFlag = true;
  }

  // **************** Password Validation ends  **********************

  // Confirm Password  validation

  if (confirmPassword !== password) {
    setValidationMessage(
      confirmPasswordValidationMessageTag,
      'Password did not match',
      'error',
      setTimeOutId
    );
    erroFlag = true;
  }

  //  confirmPassword.length <= 20
  if (
    confirmPassword === password &&
    confirmPassword !== '' &&
    confirmPassword.length >= 6
  ) {
    setValidationMessage(
      confirmPasswordValidationMessageTag,
      'Password match successfully',
      'success',
      setTimeOutId
    );
  }

  // if (confirmPassword.length > 20) {
  //   setValidationMessage(
  //     confirmPasswordValidationMessageTag,
  //     "password's length cant be greater then 20 ",
  //     'error',
  //     setTimeOutId
  //   );
  //   erroFlag = true;
  // }

  if (confirmPassword.length < 6) {
    setValidationMessage(
      confirmPasswordValidationMessageTag,
      "password's length cant be less then 6 ",
      'error',
      setTimeOutId
    );
    erroFlag = true;
  }

  if (confirmPassword === '') {
    setValidationMessage(
      confirmPasswordValidationMessageTag,
      'confirm password cannot be empty',
      'error',
      setTimeOutId
    );
    erroFlag = true;
  }

  // File upload validations
  if (dpValidationMessageTag) {
    if (dp === '') {
      setValidationMessage(
        dpValidationMessageTag,
        'Please select the img',
        'error',
        setTimeOutId
      );
      erroFlag = true;
    } else if (dp.size > 2097152) {
      // 2097152 bytes === 2MB
      setValidationMessage(
        dpValidationMessageTag,
        'Image size should not be greater then 2MB',
        'error',
        setTimeOutId
      );
    }
  }

  return erroFlag;
};

export default validateForm;

// $$$$$$$$$$$$$$$$

// Shows error or success message
// const showMessage = (ref, message, className) => {
//   ref.current.innerText = message;
//   ref.current.classList.add(className);

//   setTimeOutId.current = setTimeout(() => {
//     ref.current.innerText = '';
//     ref.current.classList.remove(className);
//   }, 4000);
// };

// Form validation
// const formValidation = () => {
//   // First name validation
//   const { firstName } = signUpCredentials;

//   if (firstName.length > 20) {
//     showMessage(firstNameRef, 'first name is too lengthy', 'error');
//     erroFlag = true;
//   }

//   if (firstName.length < 2) {
//     showMessage(firstNameRef, 'first name is too short', 'error');
//     erroFlag = true;
//   }

//   if (firstName === '') {
//     showMessage(firstNameRef, 'first name cannot be empty', 'error');
//     erroFlag = true;
//   }

//   // **************** FN Validation ends  **********************
//   // Gender validation
//   const { gender } = signUpCredentials;
//   if (gender === '') {
//     showMessage(genderRef, 'Please select your gender!!!', 'error');
//     erroFlag = true;
//   }

//   // #############

//   // lastName validation
//   const { lastName } = signUpCredentials;

//   if (lastName.length > 20) {
//     showMessage(lastNameRef, 'last name is too lengthy', 'error');
//     erroFlag = true;
//   }

//   if (lastName.length < 2) {
//     showMessage(lastNameRef, 'last name is too short', 'error');
//     erroFlag = true;
//   }

//   if (lastName === '') {
//     showMessage(lastNameRef, 'last name cannot be empty', 'error');
//     erroFlag = true;
//   }

//   // **************** LN Validation ends  **********************

//   // Phone Number Validation
//   const { phoneNumber } = signUpCredentials;

//   if (phoneNumber.length > 10 || phoneNumber.length < 10) {
//     showMessage(phoneNumberRef, 'Min and Maximum 10 digits allowed', 'error');
//     erroFlag = true;
//   }

//   if (!/^\d+$/.test(phoneNumber)) {
//     showMessage(phoneNumberRef, 'Only numeric values allowed', 'error');
//     erroFlag = true;
//   }

//   if (phoneNumber === '') {
//     showMessage(phoneNumberRef, 'phone number cannot be empty', 'error');
//     erroFlag = true;
//   }

//   // **************** PN Validation ends  **********************

//   // Email address validation

//   const { email } = signUpCredentials;

//   function validateEmail() {
//     const re =
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
//   }

//   if (email === '') {
//     showMessage(emailRef, 'email cannot be empty', 'error');
//     erroFlag = true;
//   }

//   if (!validateEmail(email)) {
//     showMessage(emailRef, 'Invalid email address', 'error');
//     erroFlag = true;
//   }

//   // **************** Email Validation ends  **********************

//   // Password  validation
//   const { password } = signUpCredentials;

//   if (password.length > 20) {
//     showMessage(
//       passwordRef,
//       "password's length cant be greater then 20 ",
//       'error'
//     );
//     erroFlag = true;
//   }

//   if (password.length < 6) {
//     showMessage(
//       passwordRef,
//       "password's length cant be less then 6 ",
//       'error'
//     );
//     erroFlag = true;
//   }

//   if (password === '') {
//     showMessage(passwordRef, 'password cannot be empty', 'error');
//     erroFlag = true;
//   }
//   // **************** Password Validation ends  **********************

//   // Confirm Password  validation
//   const { confirmPassword } = signUpCredentials;

//   if (confirmPassword !== password) {
//     showMessage(confirmPasswordRef, 'Password did not match', 'error');
//     erroFlag = true;
//   }

//   if (
//     confirmPassword === password &&
//     confirmPassword !== '' &&
//     confirmPassword.length <= 20 &&
//     confirmPassword.length >= 6
//   ) {
//     showMessage(confirmPasswordRef, 'Password match successfully', 'success');
//   }

//   if (confirmPassword.length > 20) {
//     showMessage(
//       confirmPasswordRef,
//       "password's length cant be greater then 20 ",
//       'error'
//     );
//     erroFlag = true;
//   }

//   if (confirmPassword.length < 6) {
//     showMessage(
//       confirmPasswordRef,
//       "password's length cant be less then 6 ",
//       'error'
//     );
//     erroFlag = true;
//   }

//   if (confirmPassword === '') {
//     showMessage(
//       confirmPasswordRef,
//       'confirm password cannot be empty',
//       'error'
//     );
//     erroFlag = true;
//   }

//   // // File upload validations
//   // if (dp === '') {
//   //   showMessage(dpRef, 'Please select the img', 'error');
//   //   erroFlag = true;
//   // } else if (dp.size > 2097152) {
//   //   // 2097152 bytes === 2MB
//   //   showMessage(dpRef, 'Image size should not be greater then 2MB', 'error');
//   // }
// };

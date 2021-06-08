import setNotification from './setNotification';

const formValidation = (userInfo, timeOutId, allRef) => {
  const {
    firstNameRef,
    lastNameRef,
    passwordRef,
    phoneNumberRef,
    emailRef,
    confirmPasswordRef,
  } = allRef;

  let erroFlag = false;

  // First name validation
  const { firstName } = userInfo;

  if (firstName.length > 20) {
    setNotification(
      firstNameRef,
      'first name is too lengthy',
      'error',
      timeOutId
    );
    erroFlag = true;
  }

  if (firstName.length < 2) {
    setNotification(
      firstNameRef,
      'first name is too short',
      'error',
      timeOutId
    );
    erroFlag = true;
  }

  if (firstName === '') {
    setNotification(
      firstNameRef,
      'first name cannot be empty',
      'error',
      timeOutId
    );
    erroFlag = true;
  }

  // lastName validation
  const { lastName } = userInfo;

  if (lastName.length > 20) {
    setNotification(
      lastNameRef,
      'last name is too lengthy',
      'error',
      timeOutId
    );
    erroFlag = true;
  }

  if (lastName.length < 2) {
    setNotification(lastNameRef, 'last name is too short', 'error', timeOutId);
    erroFlag = true;
  }

  if (lastName === '') {
    setNotification(
      lastNameRef,
      'last name cannot be empty',
      'error',
      timeOutId
    );
    erroFlag = true;
  }

  // **************** LN Validation ends  **********************

  // Phone Number Validation
  const { phoneNumber } = userInfo;

  if (phoneNumber.length > 10 || phoneNumber.length < 10) {
    setNotification(
      phoneNumberRef,
      'Min and Maximum 10 digits allowed',
      'error',
      timeOutId
    );
    erroFlag = true;
  }

  if (!/^\d+$/.test(phoneNumber)) {
    setNotification(
      phoneNumberRef,
      'Only numeric values allowed',
      'error',
      timeOutId
    );
    erroFlag = true;
  }

  if (phoneNumber === '') {
    setNotification(
      phoneNumberRef,
      'phone number cannot be empty',
      'error',
      timeOutId
    );
    erroFlag = true;
  }

  // **************** PN Validation ends  **********************

  // Email address validation

  const { email } = userInfo;

  function validateEmail() {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  if (email === '') {
    setNotification(emailRef, 'email cannot be empty', 'error', timeOutId);
    erroFlag = true;
  }

  if (!validateEmail(email)) {
    setNotification(emailRef, 'Invalid email address', 'error', timeOutId);
    erroFlag = true;
  }

  // **************** Email Validation ends  **********************

  // Password  validation
  const { password } = userInfo;

  // if (password.length > 20) {
  //   setNotification(
  //     passwordRef,
  //     "password's length cant be greater then 20 ",
  //     'error',
  //     timeOutId
  //   );
  //   erroFlag = true;
  // }

  if (password.length < 6) {
    setNotification(
      passwordRef,
      "password's length cant be less then 6 ",
      'error',
      timeOutId
    );
    erroFlag = true;
  }

  if (password === '') {
    setNotification(
      passwordRef,
      'password cannot be empty',
      'error',
      timeOutId
    );
    erroFlag = true;
  }
  // **************** Password Validation ends  **********************

  // Confirm Password  validation
  const { confirmPassword } = userInfo;

  if (confirmPassword !== password) {
    setNotification(
      confirmPasswordRef,
      'Password did not match',
      'error',
      timeOutId
    );
    erroFlag = true;
  }

  //  confirmPassword.length <= 20
  if (
    confirmPassword === password &&
    confirmPassword !== '' &&
    confirmPassword.length >= 6
  ) {
    setNotification(
      confirmPasswordRef,
      'Password match successfully',
      'success',
      timeOutId
    );
  }

  // if (confirmPassword.length > 20) {
  //   setNotification(
  //     confirmPasswordRef,
  //     "password's length cant be greater then 20 ",
  //     'error',
  //     timeOutId
  //   );
  //   erroFlag = true;
  // }

  if (confirmPassword.length < 6) {
    setNotification(
      confirmPasswordRef,
      "password's length cant be less then 6 ",
      'error',
      timeOutId
    );
    erroFlag = true;
  }

  if (confirmPassword === '') {
    setNotification(
      confirmPasswordRef,
      'confirm password cannot be empty',
      'error',
      timeOutId
    );
    erroFlag = true;
  }

  // File upload validations
  // if (dp === '') {
  //   setNotification(dpRef, 'Please select the img', 'error');
  //   erroFlag = true;
  // } else if (dp.size > 2097152) {
  //   // 2097152 bytes === 2MB
  //   setNotification(dpRef, 'Image size should not be greater then 2MB', 'error');
  // }

  return erroFlag;
};

export default formValidation;

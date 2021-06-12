import setValidationMessage from './setValidationMessage';

const validateForm = (formData, setTimeOutId, allValidationMessageTags) => {
  const {
    firstNameValidationMessageTag,
    lastNameValidationMessageTag,
    passwordValidationMessageTag,
    phoneNumberValidationMessageTag,
    emailValidationMessageTag,
    confirmPasswordValidationMessageTag,
  } = allValidationMessageTags;

  let erroFlag = false;

  // First name validation
  const { firstName, lastName, phoneNumber, email, password, confirmPassword } =
    formData;

  if (firstName) {
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
  }
  // lastName validation

  if (lastName) {
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
  }

  // **************** LN Validation ends  **********************

  // Phone Number Validation
  if (phoneNumber) {
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
  }

  // **************** PN Validation ends  **********************

  // Email address validation

  const validateEmail = () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  if (email) {
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
  }

  // **************** Email Validation ends  **********************

  // Password  validation

  if (password) {
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
  // if (dp === '') {
  //   setValidationMessage(dpRef, 'Please select the img', 'error');
  //   erroFlag = true;
  // } else if (dp.size > 2097152) {
  //   // 2097152 bytes === 2MB
  //   setValidationMessage(dpRef, 'Image size should not be greater then 2MB', 'error');
  // }

  return erroFlag;
};

export default validateForm;

import axios from "axios";

const logIn = (email, password) =>
  axios.post("http://localhost:5000/user/login", { email, password });

const signUp = ({
  firstName,
  lastName,
  phoneNumber,
  email,
  password,
  confirmPassword,
}) => {
  axios.post("http://localhost:5000/sign-up", {
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    confirmPassword,
  });
};
export { logIn, signUp };

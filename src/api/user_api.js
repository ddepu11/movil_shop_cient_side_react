import axios from "axios";

const logIn = (email, password) =>
  axios.post("http://localhost:5000/user/login", { email, password });

const signUp = (userCredentials) =>
  axios.post("http://localhost:5000/user/sign-up", { ...userCredentials });

export { logIn, signUp };

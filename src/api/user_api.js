import axios from "axios";

axios.defaults.withCredentials = true;
const logIn = (email, password) =>
  axios.post("http://localhost:5000/user/login", { email, password });

const signUp = (userCredentials) =>
  axios.post("http://localhost:5000/user/sign-up", { ...userCredentials });

export { logIn, signUp };

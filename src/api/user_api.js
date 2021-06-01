import axios from "axios";

// axios.defaults.withCredentials = true;

const logIn = (email, password) =>
  axios.post("/user/login", { email, password });

const signUp = (userCredentials) =>
  axios.post("/user/sign-up", { ...userCredentials });

export { logIn, signUp };

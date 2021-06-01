import axios from "axios";

// axios.defaults.withCredentials = true;

const logIn = (email, password) =>
  axios.post("/user/login", { email, password });

const signUp = (userCredentials) =>
  axios.post("/user/sign-up", { ...userCredentials });

const accountInfo = () => axios.get("/user/account");

const logOut = () => axios.get("/user/log-out");

export { logIn, signUp, accountInfo, logOut };

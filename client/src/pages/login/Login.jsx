import style from "./Login.module.css";

import { useContext, useRef } from "react";
import { AuthContext } from "../../Context/authContext";
import axios from "axios";
export default function Login() {
  const { isLoading, dispatch } = useContext(AuthContext);

  let email = useRef("");
  let password = useRef("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: "START_LOGIN" });

    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        email: email.current.value,
        password: password.current.value,
      });

      dispatch({ type: "LOGGED_IN", payload: res.data });
      
    } catch (err) {
      dispatch({ type: "LOGIN_FAILED" });
    }

    email.current.value = "";
    password.current.value = "";
  };
 
  return (
    <div className={style.login}>
      <h1 className={style.loginTitle}>Login</h1>
      <form className={style.loginForm} onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          ref={email}
          type="email"
          required
          placeholder="Enter Your Email..."
        />
        <label>Password</label>
        <input
          ref={password}
          required
          type="password"
          placeholder="Enter Your Password..."
        />
        {isLoading ?  <button className={style.loginButton}>Loding...</button> : <button className={style.loginButton}>Login</button>}
        
      </form>
      <button className={style.loginRegister}>Register</button>
    </div>
  );
}

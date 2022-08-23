import style from "./Register.module.css";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
 
    e.preventDefault();
   if(email && username && password){
    try {
      const res = await axios.post("http://localhost:5000/auth/register", { email:email, username:username, password:password });
      
     res.data && window.location.replace('/login')
    } catch (err) {
      alert("some problem occured try again");
    }
   }else{
    alert('please fill the fields')
   }
   
    setEmail("");
    setPassword("");
    setUsername("");
  };
  return (
    <div className={style.register}>
      <h1 className={style.registerTitle}>Register</h1>
      <form className={style.registerForm} onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter Your Username..."
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Your Email..."
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Your Password..."
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button className={style.registerButton}>Register</button>
      </form>
      <button className={style.loginRegister}>Login</button>
    </div>
  );
}

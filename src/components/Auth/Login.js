import React, { useState } from "react";
import { BiLogInCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../../styles/login.css";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState({
    email: '',
    password: ''
  });
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  }
  const handleEmailChange = (e) => {
    const email = e.target.value;
    if (!/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/.test(email)) {
      setError({ ...error, email: 'Please Contain a valid email' });
      setUserInfo({ ...userInfo, email: e.target.value })
    }
    else{
      setError({ ...error, password: '' });
      setUserInfo({ ...userInfo, email: e.target.value })
    }

  }
  const handlePasswordChange = (e) => {
    const password = e.target.value;
    if (password.length < 6) {
      setError({ ...error, password: 'Password at least contain 6 character' });
      setUserInfo({ ...userInfo, password: e.target.value });
    }
    else {
      setError({ error, password: "" });
      setUserInfo({ ...userInfo, password: e.target.value });
    }
  }
  return (
    <div className="login-container">
      <div className="login-title">
        Login
        <BiLogInCircle />
      </div>
      <form onSubmit={handleLogin} className="login-form">
        <input type="email" name="email" placeholder="Your Email" value={userInfo.email} onChange={handleEmailChange} />
        {error.email && <p className="error-message">{error.email}</p>}
        <input type="password" name="password" placeholder="password" value={userInfo.password} onChange={handlePasswordChange} />
        {error.password && <p className="error-message">{error.password}</p>}
        <button>Login</button>

        <p>
          Don't have an account? <Link to="/signup">Sign up first</Link>
        </p>
      </form>

      <button>Google</button>
    </div>
  );
};

export default Login;

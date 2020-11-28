import React from 'react';
//import { Link } from 'react-router-dom';
import './styles.styl'

const Login = () => {
  return (
    <main className="login">
      <div className="login__home">
        <div className="login__home--up">
          <h1 className="login__home--up a">Welcome to</h1>
          <div className="login__home--up b">
            <h1 className="b_1">Fast</h1>
            <h1 className="b_2">Order</h1>
          </div>
        </div>
        <div className="login__down">
          <div className="login__down--input">
            <p className="input--title">Email Address</p>
            <div className="input__box"><i className="fas fa-user"/><input placeholder="Type your mail"></input></div>
            <p className="input--title">Password</p>
            <div className="input__box"><i className="fas fa-lock"/><input placeholder="Type your password"></input></div>
          </div>
          <button className="login__down--button">Sign In</button>
        </div>
      </div>
    </main>
  );
}; 

export default Login;
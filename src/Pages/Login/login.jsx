import React from "react";
import "./login.css";

import logo from "../../Assets/logo.png";

const Login = () => {
  return (
    <div className="login">
      <div className="login-logo">
        <img src={logo} alt="Logo da página" />

        <div className="loginInputEmail">
          <input type="text" placeholder="Digite seu email" />
        </div>
        <div className="loginButton">
          <a href="./home">
            <button type="submit">Entrar</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;

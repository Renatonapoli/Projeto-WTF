import React from "react";
import "./home.css";
import logo from "../../Assets/logo.png";
import logoDashboard from "../../Assets/logo-dashboard.png";
import logoUsuarios from "../../Assets/logo-usuario.png";

function home() {
  return (
    <div className="home">
      <div className="header">
        <a href="./">
          <img src={logo} alt="Logo da página" />
        </a>
        <div className="nome-usuario">
          <h1>Usuário logado</h1>
        </div>
      </div>

      <div className="titulo">
        <h1 className="titulo-principal">Menu Principal</h1>
      </div>

      <div className="body">
        <div className="logo-dashboard">
          <img src={logoDashboard} alt="Logo Dashboard" />
          <h2>Dashboard</h2>
        </div>
        <div className="logo-usuarios">
          <img src={logoUsuarios} alt="Logo Usuário" />
          <a href="./usuarios">
            <h2>Usuários</h2>
          </a>
        </div>

        <div className="meu-perfil">
          <img src={logoUsuarios} alt="Logo Perfil" />
          <h2>Formulário</h2>
        </div>
      </div>
      <div className="footer">
        <a href="./">
          <button>Sair</button>
        </a>
      </div>
    </div>
  );
}

export default home;

import React from "react";
import "./usuarios.css";
import Cards from "../../Components/cards";

import menuHamburguer from "../../Assets/menu-hamburguer.png";
import logoUsuario from "../../Assets/logo-usuario.png";

function Usuarios() {
  return (
    <div className="container">
      <div className="header-usuarios">
        <div className="header-menuHamburguer">
          <img src={menuHamburguer} alt="Logo Hamburguer" />
        </div>
        <div className="header-titulo">
          <h1>Usuários</h1>
        </div>
        <div className="header-menuPontilhado">
          <img src={menuHamburguer} alt="logo menu pontilhado" />
        </div>
      </div>

      <div className="search">
        <input type="text" placeholder="Buscar" />
      </div>
      <div className="titulo-adicionar">
        <h2>Adicionar novos usuários</h2>
      </div>
      <div className="botao-cadastrar">
        <button>Cadastrar usuário</button>
      </div>
      <div className="cards">
        <div className="cards-a">
          <h3>A</h3>
        </div>
        <div className="cards-prop">
          <Cards image={logoUsuario} title="Ana Paula" />
          <Cards images={logoUsuario} title="Ana Clara" />
          <Cards images={logoUsuario} title="Ana Joaquina" />
          <Cards images={logoUsuario} title="Ana Luiza" />
        </div>
        <div className="cards-b">
          <h3>B</h3>
          <div className="cards-prop">
            <Cards image={logoUsuario} title="Bruno" />
            <Cards images={logoUsuario} title="Bruna" />
            <Cards images={logoUsuario} title="Bernardo" />
            <Cards images={logoUsuario} title="Bastião" />
            <Cards images={logoUsuario} title="Bruna" />
            <Cards images={logoUsuario} title="Bernardo" />
          </div>
        </div>
      </div>
      <div className="footer-usuarios">
        <a href="./home">
          <button>Voltar ao menu</button>
        </a>
      </div>
    </div>
  );
}

export default Usuarios;

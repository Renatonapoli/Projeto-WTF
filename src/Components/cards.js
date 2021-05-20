import React from "react";
import "./cards.css";
import logoUsuario from "../Assets/logo-usuario.png";

function cards({ title }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={logoUsuario} alt="Foto do usuário" />
      </div>
      <div className="card-title">
        <p>{title}</p>
      </div>
    </div>
  );
}

export default cards;

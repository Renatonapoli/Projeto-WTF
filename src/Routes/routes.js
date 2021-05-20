import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../Pages/Login/login";
import Home from "../Pages/Home/home";
import Usuarios from "../Pages/Usuarios/usuarios";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/usuarios" component={Usuarios} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

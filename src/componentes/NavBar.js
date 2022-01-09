import React  from "react";
import logo from "../img/logo.jpg"
import CartWidget from "./CartWidget"
import "./Navbar.css";

function NavBar ()  {
  return (
    <div class="headerContainer">
      <div class="logo">
        <img src={logo} alt="logo"/></div>
      <div class="navbar">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Mi Pedido</a></li>
          <li><a href="#">Contacto</a></li> 
        </ul>
      </div>
      <CartWidget/>
    </div>
  );
}

export default NavBar;

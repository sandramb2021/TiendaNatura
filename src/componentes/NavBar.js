import React  from "react";


function NavBar ()  {
  return (
    <div class="headerContainer">
      <div class="logo">Tienda NATURA</div>
      <div class="navbar">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Mi Pedido</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;

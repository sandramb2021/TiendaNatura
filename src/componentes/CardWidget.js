import React  from "react";
import cart from "../img/cart.png"


function CardWidget ()  {
  return (
    
      <div class="card">
        <img src={cart} alt="carro"/><label text="0"/>
      </div>
    
  );
}

export default CardWidget;
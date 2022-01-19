import React from "react";
import "./Item.css";

const Item = ({ title, price, pictureUrl, description }) => {  
    const onDetail =() => {
        const message =`Quieres ver más info del producto ${title}`;
        alert(message) ;        
    };

    return (
      
        <div className="itemDetail">
                <div className="itemDetail-imageContainer">
                    <div className="itemDetail-image">
                        <img className="image" alt={title} src={pictureUrl}></img>
                    </div>
                    <div className="itemDetail-desc">
                        <h2 className="title">{title}</h2>       
                        <div className="price-space"></div><div className="price-container">                                           
                        <p className="price">${price}</p></div> 
                        <p className="description">{description}</p>
                    </div>
                </div>
                <div className="itemDetail-detalles">
                    <button id="masDetalles" onClick={onDetail}>Ver más detalles</button>
                </div>
            </div>        
     
   );
 };
 export default Item;
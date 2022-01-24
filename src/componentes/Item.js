import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";


const Item = ({ id, title, price, image, description  }) => {  
    
    return (
        <Link to={`/products/${id}`}>
            <div className="itemDetail">
                <div className="itemDetail-imageContainer">
                    <div className="itemDetail-image">
                        <img className="image" alt={title} src={image}></img>
                    </div>
                    <div className="itemDetail-desc">
                        <h2 className="title">{title}</h2>       
                        <div className="price-space"></div><div className="price-container">                                           
                        <p className="price">${price}</p></div> 
                        <p className="description">{description}</p>
                    </div>
                </div>
                
            </div>        
        </Link>
   );
 };
 export default Item;
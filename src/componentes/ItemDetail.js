import React from "react";
import ItemCount  from "./ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ title, price, image, description }) =>  
     {
       return (
             
          <div className="product">
                <h2 className="title">{title}</h2>         
                <img className="image" alt={title} src={image}></img>
                <p className="price">${price}</p>
                <p className="description">{description}</p>
                <ItemCount stock={5} initial={1}/>
          </div>
       )  ;
    };
    
    
 export default ItemDetail;
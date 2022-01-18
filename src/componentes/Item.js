import React from "react";
import ItemCount  from "./ItemCount";
import "./Item.css";

export const Item =({ item}) =>
 {
     
   return (
         
      <div key={item.id} className="product">
            <img className="image" alt={item.id} src={item.image}></img>
            <div>
               <h2 className="name">{item.name}</h2>         
               
               <p className="species">{item.species}</p>
               <p className="status">{item.status}</p>
            </div>
            <ItemCount stock={5} initial={1}/>
      </div>
   )  ;
};


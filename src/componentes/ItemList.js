import React from "react";
import {Item} from "./Item";
import "./ItemList.css";

const ItemList = ({ products }) => {
   console.log("Productos en IL", products);
   return (
      <div className="ItemList">
       {products.map((product) => {
         return (
           <Item
             key={product.id}
             title={product.title}
             pictureUrl={product.pictureUrl}
             price={product.price}
             description={product.description}
           />
         );
       })}
     </div>
   );
 };
 export default ItemList;
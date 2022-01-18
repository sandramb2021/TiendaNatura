import React from "react";
import {Item} from "./Item";
import "./ItemList.css";

const ItemList = ({ personajes }) => {
   /*console.log("Personajes en IL", personajes);*/
   return (
      <div className="ItemList">
       {personajes.map((personaje) => (
         <Item item={personaje} />
      
         )
       )}
     </div>
   );
 };
 export default ItemList;
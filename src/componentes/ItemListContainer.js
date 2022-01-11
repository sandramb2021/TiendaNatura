import React  from "react";
import "./ItemListContainer.css"
import ItemCount  from "./ItemCount";

function ItemListContainer() {  

    return(
        <div class="catalogo">
            <label >Todos los productos para que te veas increíble</label>
            <div class="item">
                 <ItemCount stock="5" initial="1"/>
            </div>
            
        </div>
    );
  }
  
export default   ItemListContainer;
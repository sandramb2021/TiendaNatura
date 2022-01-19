import React, { useState , useEffect}  from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList";



const ItemListContainer = () => {  
  const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = async () => {

            try {
                const response = await fetch("https://franncode.vercel.app/api/products");
                const data = await response.json();


                console.log("Los items", data);
                setItems(data);

                
            } catch (error) {
                console.log(error)
            };
        };

        getItems();
    },[]);

    return(
        <div className="catalogoItems">
                {items ? <ItemList items={items} />    
                     : <p>Consultando producto....</p>}

        </div>
    );
  }
  
export default ItemListContainer
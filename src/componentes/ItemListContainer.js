import React, { useState , useEffect}  from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import {  useParams } from 'react-router-dom'


const ItemListContainer = () => {  
  const [items, setItems] = useState([]);
  const { categoryId  } = useParams()

    useEffect(() => {
        const getItems = async () => {

            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.data;
                console.log("Los items", data);
                setItems(data.filter(item => item.category === (categoryId)));           
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
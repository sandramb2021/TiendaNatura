import React, { useState , useEffect}  from "react";
import "./ItemDetailContainer.css";
import  ItemDetail from "./ItemDetail";
import {  useParams } from 'react-router-dom'

const ItemDetailContainer = () => {  
    const [product, setProduct] = useState({});
    const { id  } = useParams()
    
    useEffect(() => {
        const getProduct = async () => {
            try {
                
      
      const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.data;//response.json();
                console.log("El producto", data);
                setProduct(data.find((item) => item.id === parseInt(id)));              
            } catch (error) {
                console.log(error)
            };
        };
        getProduct();
    },[id]);

    return(
        <div className="catalogo">                
            <div className="ItemList">
                 {product ? 
                    
                        <ItemDetail 
                            key={product.id}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            description={product.description} 
                        /> 
                     : <p>Consultando producto....</p>}         
            </div>
        </div>
    );
  }
  
export default   ItemDetailContainer;
import React, { useState , useEffect}  from "react";
import "./ItemListContainer.css";
import  ItemList from "./ItemList";

const ItemListContainer = () => {  
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const getProducts = async () => {
            try {
                
                const response = await fetch("https://franncode.vercel.app/api/products");
                const data = await response.json();

                console.log("Los productos", data);
                setProducts(data);
                
            } catch (error) {
                console.log(error)
            };
        };
        getProducts();
    },[]);

    return(
        <div className="catalogo">
            <label >Todos los productos para que te veas increíble</label>
                {products ? <ItemList products={products} /> : <p>Consultando productos....</p>
}
        </div>
    );
  }
  
export default   ItemListContainer;
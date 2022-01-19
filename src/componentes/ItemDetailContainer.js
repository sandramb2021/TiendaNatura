import React, { useState , useEffect}  from "react";
import "./ItemDetailContainer.css";
import  ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {  
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
            <div className="ItemList">
                 {products ? 
                    products.map((product) => (
                        <ItemDetail 
                            key={product.id}
                            title={product.title}
                            pictureUrl={product.pictureUrl}
                            price={product.price}
                            description={product.description} 
                        />)    
                    ) : <p>Consultando producto....</p>}         
            </div>
        </div>
    );
  }
  
export default   ItemDetailContainer;
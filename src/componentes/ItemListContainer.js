import React, { useState , useEffect}  from "react";
import "./ItemListContainer.css";
import  ItemList from "./ItemList";

const ItemListContainer = () => {  
    
    const [personajes, setpersonajes] = useState([]);    

    useEffect(() => {
        
        const getPersonajes = async () => {
            try {
                const response = await fetch("https://rickandmortyapi.com/api/character");
                const data = await response.json();
                setpersonajes(data.results);
                
            } catch (error) {
                console.log(error)
            };
        };
        
        getPersonajes();
    },[]);

    return(
        <div className="catalogo">
            <label >Todos los productos para que te veas increíble</label>
                {personajes ? 
                    <ItemList personajes={personajes} />
               : <p>Consultando personajes Rick & Morty....</p>}
        </div>
    );
  }
  
export default   ItemListContainer;
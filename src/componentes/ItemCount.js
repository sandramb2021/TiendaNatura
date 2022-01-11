import React , {useState} from "react";

function ItemCount({stock, initial}) {
    
    const [counter,setCounter]= useState(initial);
    
    const onIncrease =()=> {
        counter < stock ? setCounter(counter + 1) : setCounter(counter + 0)            
    }

    const onDecrease =()=> {
        counter > initial ? setCounter(counter - 1) : setCounter(initial)            
    }
        
    const onAdd =() => {
        const message =`Has agregado ${counter} producto`;
        counter ==1 ? alert(message) : alert(`${message}s`)
        
    }
    return(
        <div class="itemCount-Container">
            <button onClick={onDecrease} >-</button>
            <label > {counter}</label>
            <button onClick={onIncrease} >+</button>           
            <div>
                 <label>Stock {stock}</label>
            </div>
            <div>
                <button id="agregarAlCarrito" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    );
  }
  
export default ItemCount;
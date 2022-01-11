import React , {useState} from "react";

function ItemCount({stock, initial, onAdd}) {
    
    const [counter,setCounter]= useState(initial);
    
    const FuncionSumar =()=> {
        Number(counter) < 5 ? setCounter(Number(counter) + 1) : setCounter(Number(counter) + 0)            
    }

    const FuncionRestar =()=> {
        Number(counter) >= 1 ? setCounter(Number(counter) - 1) : setCounter(Number(counter) -0)            
    }
        
    return(
        <div class="itemCount-Container">
            <button onClick={()=>FuncionRestar()} >-</button>
            <label > {counter}</label>
            <button onClick={()=>FuncionSumar()} >+</button>           
            <div>
            <label>Stock {stock}</label>
        </div>
        </div>
    );
  }
  
export default ItemCount;
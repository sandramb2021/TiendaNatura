import React from "react";
import Item from "./Item";
import "./ItemList.css";


const ItemList = ({ items }) => {
    console.log("Items en IL", items);
    return (
       <div className="ItemList">
        {items.map((item) => {
          return (
            <Item
              key={item.id}
              title={item.title}
              pictureUrl={item.pictureUrl}
              price={item.price}
              description={item.description}
            />
          );
        })}
      </div>
    );
  };
  export default ItemList;


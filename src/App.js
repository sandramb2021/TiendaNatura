import React from 'react';
import './App.css';
import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from './componentes/ItemDetailContainer';

  
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemDetailContainer />
      <ItemListContainer />
    </div>
  );
}

export default App;

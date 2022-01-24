import React from 'react';
import './App.css';
import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Switch, Redirect, Route, Link } from "react-router-dom";
import Error from "./componentes/error.js"
import { Contacto } from './componentes/contacto';

  
function App() {
  return (
    <div className="App">    
      <BrowserRouter>    
        <NavBar />
        <Switch>
          <Route 
            exact 
            path="/" 
            component={ItemListContainer}></Route>
          <Route
            exact
            path="/category/:id"
            component={ItemListContainer}></Route>
          <Route
            exact
            path="/products/:id"
            component={ItemDetailContainer}></Route>
          <Route 
            exact 
            path="/contacto" 
            component={Contacto}></Route>
          <Route path='*'>
					  <Error />
				  </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

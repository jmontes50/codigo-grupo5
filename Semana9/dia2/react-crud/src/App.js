import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductoScreen from './screens/producto/ProductoScreen';
import CategoriaScreen from './screens/categoria/CategoriaScreen';
import HomeScreen from './screens/home/HomeScreen';
import HeaderGlobal from './components/HeaderGlobal';
import ProductosState from './contextos/productosState';

const App = () => {
  return (
    <ProductosState>
      <BrowserRouter>
        <HeaderGlobal />
        <Switch>
          <Route path="/productos" component={ProductoScreen} />
          <Route path="/categorias" component={CategoriaScreen} />
          <Route path="/" component={HomeScreen} />
        </Switch>
      </BrowserRouter>
    </ProductosState>

  )
}

export default App

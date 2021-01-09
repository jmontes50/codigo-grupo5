import React from 'react';
import { Switch, Route } from "react-router-dom";
import CatalogoHeader from './componentes/CatalogoHeader';
import CatalogoBusquedaScreen from './screens/busqueda/CatalogoBusquedaScreen';
import CatalogoCarritoScreen from './screens/carrito/CatalogoCarritoScreen';
import CatalogoProductoByIdScreen from './screens/productoById/CatalogoProductoByIdScreen';
import CatalogoProductosScreen from './screens/productos/CatalogoProductosScreen';

const CatalogoRouter = () => {
  return (
    <>
      <CatalogoHeader />
      <Switch>

        <Route path="/catalogo/busqueda" component={CatalogoBusquedaScreen} />
        <Route path="/catalogo/carrito" component={CatalogoCarritoScreen} />
        <Route path="/catalogo/productos/:id" component={CatalogoProductoByIdScreen} />
        <Route path="/catalogo/productos" component={CatalogoProductosScreen} />


      </Switch>

    </>
  )
}

export default CatalogoRouter

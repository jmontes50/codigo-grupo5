import React from 'react'
import { Route, Switch } from "react-router-dom";
import AdminCategoriasScreen from './screens/categorias/AdminCategoriasScreen';
import AdminProductosScreen from './screens/productos/AdminProductosScreen';

const AdminRouter = () => {
  return (
    <>
      <Switch>

        <Route path="/admin/categorias" component={AdminCategoriasScreen} />
        <Route path="/admin/productos" component={AdminProductosScreen} />


      </Switch>
    </>
  )
}

export default AdminRouter

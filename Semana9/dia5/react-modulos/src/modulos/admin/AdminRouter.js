import React from 'react'
import { Switch, Route } from "react-router-dom";
import AdminHeader from './componentes/AdminHeader';
import AdminClientesScreen from './screens/clientes/AdminClientesScreen';
import AdminProductosScreen from './screens/productos/AdminProductosScreen';
const AdminRouter = () => {
  return (
    <>
      <AdminHeader />
      <Switch>
        <Route path="/admin/productos" component={AdminProductosScreen} />
        <Route path="/admin/clientes" component={AdminClientesScreen} />
      </Switch>
    </>
  )
}

export default AdminRouter

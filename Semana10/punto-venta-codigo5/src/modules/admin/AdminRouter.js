import React from 'react'
import { Switch, Route } from "react-router-dom";
import AdminHeader from './components/AdminHeader';
import AdminDashboardScreen from './screens/dashboard/AdminDashboardScreen';
import AdminPedidosScreen from './screens/pedidos/AdminPedidosScreen';
const AdminRouter = () => {
  return (
    <>
      <AdminHeader />
      <Switch>
        <Route path="/admin/dashboard" component={AdminDashboardScreen} />
        {/* <Route path="/admin/pedidos/:pedido_id" /> */}
        <Route path="/admin/pedidos" component={AdminPedidosScreen} />
      </Switch>
    </>
  )
}

export default AdminRouter

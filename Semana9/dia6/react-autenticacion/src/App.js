import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AuthState from "./context/authState";
import AdminRouter from './modules/admin/AdminRouter';
import AuthRouter from './modules/auth/AuthRouter';
import InvitadoHomeScreen from './modules/invitado/screens/home/InvitadoHomeScreen';
import Private from './Private';
const App = () => {
  return (
    <AuthState>
      <BrowserRouter>
        <Switch>
          <Private path="/admin" component={AdminRouter} />
          <Route path="/auth" component={AuthRouter} />
          <Route path="/" exact component={InvitadoHomeScreen} />
          <Redirect to={"/"} />
          {/* <Route component={InvitadoHomeScreen} /> */}
        </Switch>
      </BrowserRouter>
    </AuthState>
  )
}

export default App

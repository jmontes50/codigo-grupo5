import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminRouter from './modulos/admin/AdminRouter';
import AuthRouter from './modulos/auth/AuthRouter';
import CatalogoRouter from './modulos/catalogo/CatalogoRouter';
import NotFoundScreen from './modulos/home/screens/404/NotFoundScreen';
import HomeScreen from './modulos/home/screens/home/HomeScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/catalogo" component={CatalogoRouter} />
        <Route path="/admin" component={AdminRouter} />
        <Route path="/auth" component={AuthRouter} />
        <Route path="/" exact component={HomeScreen} />
        <Route component={NotFoundScreen} />

      </Switch>

    </BrowserRouter>
  )
}

export default App

import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Private from './Private';
import AdminScreen from './screens/admin/AdminScreen';
import ContactoScreen from './screens/home/ContactoScreen';
import HomeScreen from './screens/home/HomeScreen';
import NosotrosScreen from './screens/home/NosotrosScreen';

const App = () => {
  return (
    <BrowserRouter>

      <Switch>

        <Route path="/contacto" component={ContactoScreen} />
        <Route path="/nosotros" component={NosotrosScreen} />

        <Private path="/admin" component={AdminScreen} />

        <Route path="/" exact component={HomeScreen} />

      </Switch>

    </BrowserRouter>
  )
}

export default App

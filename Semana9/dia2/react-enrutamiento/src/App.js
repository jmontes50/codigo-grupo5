import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <p>
        Algunos enlaces
      </p>
      <Switch>
        <Route path="/nosotros" />
        <Route path="/clientes" />
        <Route path="/proyectos" />
      </Switch>

    </BrowserRouter>
  )
}

export default App

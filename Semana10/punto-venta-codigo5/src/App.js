import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PosRouter from './modules/pos/PosRouter';
const App = () => {
  return (
    <BrowserRouter>

      <Switch>

        <Route path="/pos" component={PosRouter} />

      </Switch>

    </BrowserRouter>
  )
}

export default App

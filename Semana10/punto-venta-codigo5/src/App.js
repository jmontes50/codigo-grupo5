import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminRouter from './modules/admin/AdminRouter';
import PosRouter from './modules/pos/PosRouter';
const App = () => {
  return (
    <BrowserRouter>

      <Switch>

        <Route path="/pos" component={PosRouter} />
        <Route path="/admin" component={AdminRouter} />
      </Switch>

    </BrowserRouter>
  )
}

export default App

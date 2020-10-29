import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Repository from '../pages/Repository'

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Dashboard}/>
      <Route path="/repositories/:repository_name+" component={Repository}/>
    </Switch>
  </BrowserRouter>
)

export default Routes

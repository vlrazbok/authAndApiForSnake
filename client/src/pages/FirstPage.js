import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import { Navbar } from '../components/navbar/Navbar'
import { AuthPage } from './AuthPage'
import { ScorePage } from './ScorePage'
export const FirstPage = () => {

  return(
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/score" component={ScorePage}></Route>
        <Route exact path="/auth" component={AuthPage}></Route>  
      </Switch>
      <Redirect to="/auth" />
    </Router>
    )
}
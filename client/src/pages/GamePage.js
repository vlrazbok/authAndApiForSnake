import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import { GameApp }  from '../components/game/GameApp'
import { NavbarGame } from '../components/navbarGame/NavbarGame'
import { ScorePage } from './ScorePage'

export const GamePage = () => {

  return(
    <Router>
      <NavbarGame />
      <Switch>
        <Route exact path="/score" component={ScorePage}></Route>
        <Route exact path="/game" component={GameApp}></Route>
      </Switch>
      <Redirect to="/game" />
    </Router>
  )
}
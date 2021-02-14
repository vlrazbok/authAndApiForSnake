import React from 'react'
import './App.scss'
import { AuthContext } from './context/AuthContext'
import { useAuth } from './hooks/auth.hook'
import { useRoutes } from './routes'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {

  const {token, login, logout, userId, ready} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)

  if(!ready){
    return <>Loading</>
  }
  return (
    <div className="App">
      <AuthContext.Provider value={{token, login, logout, userId, isAuthenticated}}>
        <Router>
          <div className="container">
            {routes}
          </div>
        </Router>
      </AuthContext.Provider>
    </div>
  )
}
export default App

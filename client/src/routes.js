import React from 'react'
import { FirstPage } from './pages/FirstPage'
import { GamePage } from './pages/GamePage'
export const useRoutes = (isAuthenticated) => {
  if(isAuthenticated){
    return(
      <GamePage />
    )
  }
  return(
     <FirstPage />
  )
}
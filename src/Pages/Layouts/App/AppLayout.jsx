import React from 'react'
import AppNav from './Components/AppNav'
import AppSideBar from './Components/AppSideBar'

const AppLayout = ({children}) => {
  return (
    <div>
      <AppNav/>
      <AppSideBar/>
      {children}
      </div>
  )
}

export default AppLayout
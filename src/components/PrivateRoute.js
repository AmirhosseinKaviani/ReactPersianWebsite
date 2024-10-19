import React from 'react'
import {isLogin} from "../pages/utils"
import { Navigate } from 'react-router-dom'
const PrivateRoute = ({children}) => {
  return (
    <>
        {isLogin()? children : <Navigate to='/'/> }
    </>
  )
}

export default PrivateRoute

import React, { createContext, useState, useEffect, useReducer } from 'react'
import { authReducer } from '../reducers/authReducer'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  // State
  // const [isAuthenticated, setAuthentication] = useState(true)
  const [isAuthenticated, dispatch] = useReducer(authReducer, true)

  /* const toggleAuth = () => {
    setAuthentication(!isAuthenticated)
  } */

  // useEffect
  useEffect(() => {
    alert(isAuthenticated ? 'Login successful' : 'Logout successful')
  }, [isAuthenticated])

  // Context Data
  const authContextData = {
    isAuthenticated,
    dispatch
  }

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider

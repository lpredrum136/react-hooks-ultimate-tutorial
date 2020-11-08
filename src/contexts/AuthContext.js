import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  // State
  const [isAuthenticated, setAuthentication] = useState(true)

  const toggleAuth = () => {
    setAuthentication(!isAuthenticated)
  }

  // Context Data
  const authContextData = {
    isAuthenticated,
    toggleAuth
  }

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider

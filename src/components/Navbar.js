import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'

const Navbar = () => {
  // Load context
  const { theme } = useContext(ThemeContext)
  const { isLightTheme, light, dark } = theme

  const { isAuthenticated, toggleAuth } = useContext(AuthContext)

  return (
    <div className='navbar' style={isLightTheme ? light : dark}>
      <h1>My Hooks App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>
          {isAuthenticated ? 'You are logged in ' : ''}
          <button onClick={toggleAuth}>
            {isAuthenticated ? 'Logout' : 'Login'}
          </button>
        </li>
      </ul>
    </div>
  )

  // ANOTHER WAY
  /* return (
    <ThemeContext.Consumer>
      {context => {
        const { theme } = context
        const { isLightTheme, light, dark } = theme

        return (
          <div className='navbar' style={isLightTheme ? light : dark}>
            <h1>My Hooks App</h1>
            <ul>
              <li>Home</li>
              <li>About</li>
            </ul>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  ) */

  // ANOTHER WAY MULTIPLE CONSUMER
  /* return (
    <AuthContext.Consumer>
      {authContext => (
        <ThemeContext.Consumer>
          {themeContext => {
            // Your code here
            // Return JSX
          }}
        </ThemeContext.Consumer>
      )}
    </AuthContext.Consumer>
  ) */
}

export default Navbar

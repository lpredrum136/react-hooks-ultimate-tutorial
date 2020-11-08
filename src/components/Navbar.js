import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const Navbar = () => {
  // Load context
  const { theme } = useContext(ThemeContext)
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
}

export default Navbar

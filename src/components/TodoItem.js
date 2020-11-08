import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const TodoItem = ({ todo, deleteTodo }) => {
  // Load context
  const { theme } = useContext(ThemeContext)
  const { isLightTheme, light, dark } = theme

  return (
    <li
      onClick={() => {
        deleteTodo(todo.id)
      }}
      style={isLightTheme ? light : dark}
    >
      {todo.title}
    </li>
  )
}

export default TodoItem

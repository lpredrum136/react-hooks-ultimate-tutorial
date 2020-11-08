import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { TodoContext } from '../contexts/TodoContext'

const TodoItem = ({ todo }) => {
  // Load context
  const { theme } = useContext(ThemeContext)
  const { isLightTheme, light, dark } = theme

  const { deleteTodo } = useContext(TodoContext)

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

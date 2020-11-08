import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ThemeContext } from '../contexts/ThemeContext'
import { TodoContext } from '../contexts/TodoContext'

const TodoForm = () => {
  // Load context
  const { theme } = useContext(ThemeContext)
  const { isLightTheme, light, dark } = theme

  const { addTodo } = useContext(TodoContext)

  const [title, setTitle] = useState('')

  const onTitleChange = event => {
    setTitle(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    addTodo({
      id: uuidv4(),
      title
    })
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='title'
        placeholder='Enter new todo'
        onChange={onTitleChange}
        value={title}
        required
      />
      <input type='submit' value='Add' style={isLightTheme ? light : dark} />
    </form>
  )
}

export default TodoForm

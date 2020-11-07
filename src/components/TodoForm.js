import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const TodoForm = ({ addTodo }) => {
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
      <input type='submit' value='Add' />
    </form>
  )
}

export default TodoForm

import React, { useState } from 'react'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'

const Todos = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Viec 1' },
    { id: 2, title: 'Viec 2' },
    { id: 3, title: 'Viec 3' }
  ])

  const addTodo = todo => {
    setTodos([...todos, todo])
  }

  return (
    <div className='todo-list'>
      <TodoForm addTodo={addTodo} />

      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  )
}

export default Todos

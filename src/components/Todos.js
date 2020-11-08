import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'

const Todos = () => {
  // Load context
  const { todos } = useContext(TodoContext)

  return (
    <div className='todo-list'>
      <TodoForm />

      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  )
}

export default Todos

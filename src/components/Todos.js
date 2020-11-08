import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'
import { AuthContext } from '../contexts/AuthContext'

const Todos = () => {
  // Load context
  const { todos } = useContext(TodoContext)
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <div className='todo-list'>
      <TodoForm />
      {isAuthenticated ? (
        <ul>
          {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: 'center' }}>Not authorised</p>
      )}
    </div>
  )
}

export default Todos

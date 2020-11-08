import React, { createContext, useState, useEffect, useReducer } from 'react'
import { todoReducer } from '../reducers/TodoReducer'
import { GET_TODOS, SAVE_TODOS } from '../reducers/types'

export const TodoContext = createContext()

const TodoContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, [])

  // State
  // const [todos, setTodos] = useState([])

  useEffect(() => {
    /* console.log('getting todos')
    const todos = localStorage.getItem('todos')
    if (todos) setTodos(JSON.parse(todos)) */
    dispatch({ type: GET_TODOS, payload: null })
  }, [])

  useEffect(() => {
    /* console.log('saving todos')
    localStorage.setItem('todos', JSON.stringify(todos)) */
    dispatch({ type: SAVE_TODOS, payload: { todos } })
  }, [todos])

  /* const addTodo = todo => {
    setTodos([...todos, todo])
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  } */

  const todoContextData = {
    todos,
    dispatch
  }

  return (
    <TodoContext.Provider value={todoContextData}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider

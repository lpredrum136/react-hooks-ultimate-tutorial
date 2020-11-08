import React from 'react'

const TodoItem = ({ todo, deleteTodo }) => (
  <li
    onClick={() => {
      deleteTodo(todo.id)
    }}
  >
    {todo.title}
  </li>
)

export default TodoItem

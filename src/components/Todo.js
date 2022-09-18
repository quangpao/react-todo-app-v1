import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

function Todo({ todos, completeTodo, removeTodo, editTodo }) {
  
  // Create a useState for saving Todo edit data
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  // A function to submit after edit a todo
  const submitUpdate = value => {
    editTodo(edit.id, value)
    setEdit({
      id: null,
      value: ''
    });
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  // Use to display all todo items from TodoList
  return todos.map((todo, index) => (
    <div 
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
      key={index}
    >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>

        {/* Using react-icons package for icons render */}
        <div className='icons'>

          <RiCloseCircleLine 
            onClick={() => removeTodo(todo.id)}
            className='delete-icon'
          />

          <TiEdit 
            onClick={() => setEdit({id: todo.id, value: todo.text})}
            className='edit-icon'
          />

        </div>
    </div>
  ))
}

export default Todo
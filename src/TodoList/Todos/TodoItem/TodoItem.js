import React from 'react'

function TodoItem(props) {
  return (
      <div className="row todo-item">
        <span className={`col-9 ${props.completed ? 'text-muted' : ''}`}>{props.todo.title}</span>
        <span className={`col-2 offset-1 ${props.display ? props.display: 'd-none'} icon`}>
          <i className="fa-solid fa-right-left"></i>
        </span>
      </div>
  )
}

export default TodoItem
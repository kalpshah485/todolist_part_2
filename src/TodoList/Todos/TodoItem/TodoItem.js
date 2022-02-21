import React, { useState } from 'react'

function TodoItem(props) {
  const [display, setDisplay] = useState(props.todo.checked);
  const handleDisplay = () => {
    if (props.todo.checked) {
      setDisplay(true);
    }else{
      if (display) {
        setDisplay(false);
      }else{
        setDisplay(true);
      }
    }
  }
  return (
      <div className="row todo-item" onMouseEnter={handleDisplay} onMouseLeave={handleDisplay}>
        <span className={`col-9 todo-title ${props.todo.checked ? 'text-muted' : ''}`}>{props.todo.title}</span>
        <span className={`col-2 offset-1 ${display ? 'd-inline': 'd-none'} icon`} onClick={() => props.toggleCheck(props.index)}>
          <i className="fa-solid fa-right-left"></i>
        </span>
      </div>
  )
}

export default TodoItem
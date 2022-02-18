import React from 'react';
import DateDay from './DateDay/DateDay';
import Todos from './Todos/Todos';
import Button from './Button/Button';

function TodoList() {
  return (
    <div className="box shadow bg-body rounded">
      <DateDay />
      <Todos />
      <Button />
    </div>
  )
}

export default TodoList
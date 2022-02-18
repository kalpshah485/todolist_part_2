import React, { useState } from 'react';
import DateDay from './DateDay/DateDay';
import Todos from './Todos/Todos';
import Button from './Button/Button';

function TodoList() {
  const [hideBtn, setHideBtn] = useState(false);
  const toggleHideBtn = () => {
    if (hideBtn) {
      setHideBtn(false);
    } else {
      setHideBtn(true);
    }
  }
  return (
    <div className="box shadow bg-body rounded">
      <DateDay />
      <Todos hideBtn={hideBtn} toggleHideBtn={toggleHideBtn} />
      <Button hideBtn={hideBtn} toggleHideBtn={toggleHideBtn} />
    </div>
  )
}

export default TodoList
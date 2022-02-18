import React, { useState } from 'react'

function TodoInput() {
    const [inputData, setInputData] = useState('');
    return (
        <div className="todo-input">
            <input type="text" className="form-control" placeholder="create todo" value={inputData} onChange={(e) => setInputData(e.target.value)} />
        </div>
    )
}

export default TodoInput
import React, { useState } from 'react'

function TodoInput(props) {
    const [inputData, setInputData] = useState('');
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            if (inputData === '') {
                alert('Please enter some value')
            }
            else{
                props.addTodo(inputData);
                props.toggleHideBtn();
                setInputData('');
            }
        }
    }
    return (
        <div className={`${props.hideBtn ? 'd-block' : 'd-none'}`}>
            <input 
                type="text" 
                className="form-control" 
                placeholder="create todo" 
                value={inputData} 
                onKeyPress={(e) => handleEnter(e)}
                onChange={(e) => setInputData(e.target.value)} 
            />
        </div>
    )
}

export default TodoInput
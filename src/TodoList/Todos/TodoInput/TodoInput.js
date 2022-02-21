import React, { useEffect, useState } from 'react'

function TodoInput(props) {
    const [inputData, setInputData] = useState('');
    useEffect(() => {
        if (props.hideBtn) {
            document.querySelector('input').focus();
        }
    },[props.hideBtn])
    
    const handleEnter = (e) => {
        console.log(e.key);
        if (e.key === 'Enter') {
            if (inputData === '') {
                alert('Please enter some value')
            }
            else{
                props.addTodo(inputData);
                props.toggleHideBtn();
                setInputData('');
            }
        } else if (e.key === 'Escape') {
            props.toggleHideBtn();
            setInputData('');
        }
    }
    return (
        <div className={`todo-input ${props.hideBtn ? 'd-block' : 'd-none'}`}>
            <input 
                type="text" 
                className="form-control" 
                placeholder="create todo" 
                value={inputData} 
                onKeyUp={(e) => handleEnter(e)}
                onChange={(e) => setInputData(e.target.value)} 
            />
        </div>
    );
};

export default TodoInput
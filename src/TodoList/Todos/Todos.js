import React, { useState } from 'react';
import TodoInput from './TodoInput/TodoInput';
import TodoItem from './TodoItem/TodoItem'

function Todos(props) {
    const todoArr = [
        {
            title: 'Buy New SweatShirts',
            checked: true,
            createdAt: new Date()
        },
        {
            title: 'Begin Promotional Phase',
            checked: true,
            createdAt: new Date()
        },
        {
            title: 'Read an article',
            checked: false,
            createdAt: new Date()
        },
        {
            title: 'Try not to fall asleep',
            checked: false,
            createdAt: new Date()
        },
        {
            title: 'Watch \'Sherlock\'',
            checked: false,
            createdAt: new Date()
        },
        {
            title: 'Begin QA for the product',
            checked: false,
            createdAt: new Date()
        },
        {
            title: 'Go for the Walk',
            checked: false,
            createdAt: new Date()
        }
    ]
    const [todos, setTodos] = useState(todoArr);
    const toggleCheck = (index) => {
        let newTodos = [...todos];
        if (todos[index].checked) {
            todos[index].checked = false;
        }else{
            todos[index].checked = true;
        }
        setTodos(newTodos);
    }
    const addTodo = (title) => {
        setTodos([...todos,{title,checked: false,createdAt: new Date()}]);
    }
    return (
        <>
        <div className="todos">
            {todos.map((todo, index) => {
                return <TodoItem key={index} index={index} todo={todo} toggleCheck={toggleCheck} />
            })}
        </div>
        <TodoInput hideBtn={props.hideBtn} toggleHideBtn={props.toggleHideBtn} addTodo={addTodo} />
        </>
    )
}

export default Todos
import React, { useState } from 'react';
import TodoInput from './TodoInput/TodoInput';
import TodoItem from './TodoItem/TodoItem'

function Todos(props) {
    const todoArr = [
        {
            title: 'Buy New SweatShirts'
        },
        {
            title: 'Begin Promotional Phase'
        },
        {
            title: 'Read an article'
        },
        {
            title: 'Try not to fall asleep'
        },
        {
            title: 'Watch \'Sherlock\''
        },
        {
            title: 'Begin QA for the product'
        },
        {
            title: 'Go for the Walk'
        }
    ]
    const [todos, setTodos] = useState(todoArr);
    const addTodo = (title) => {
        setTodos([...todos,{title}]);
    }
    return (
        <>
        <div className="todos">
            {todos.map((todo, index) => {
                if (index === 0 || index === 1) {
                    return <TodoItem key={index} todo={todo} completed={true} display='d-inline' />
                }
                return <TodoItem key={index} todo={todo} />
            })}
        </div>
        <TodoInput hideBtn={props.hideBtn} toggleHideBtn={props.toggleHideBtn} addTodo={addTodo} />
        </>
    )
}

export default Todos
import React, { useEffect, useState } from 'react';
import TodoInput from './TodoInput/TodoInput';
import TodoItem from './TodoItem/TodoItem'

const getLocalItems = () => {
    let list = localStorage.getItem('todos');

    if (list) {
        return JSON.parse(localStorage.getItem('todos'));
    } else {
        return [];
    }
}

const getExpires = () => {
    let expDate = localStorage.getItem('expires');
    if (expDate) {
        return expDate;
    } else {
        return '';
    }
}

function Todos(props) {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate());
    const expiry = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() + 1);
    const expires = getExpires();
    const [todos, setTodos] = useState(getLocalItems());
    useEffect(() => {
        if (date >= expires) {
            console.log("removed");
            setTodos([]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    useEffect(() => {
        if (todos.length === 0) {
            console.log("setted expDate");
            localStorage.setItem('expires', expiry);
        } else if (!expires){
            console.log("setted expDate");
            localStorage.setItem('expires', expiry);
        }
        localStorage.setItem('todos', JSON.stringify(todos));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [todos,expiry]);
    const toggleCheck = (index) => {
        let newTodos = [...todos];
        if (newTodos[index].checked) {
            newTodos[index].checked = false;
        }else{
            newTodos[index].checked = true;
        }
        setTodos(newTodos);
    }
    const addTodo = (title) => {
        setTodos([...todos,{title,checked: false}]);
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
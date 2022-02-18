import React,{useState} from 'react'
import TodoItem from './TodoItem/TodoItem'

function Todos() {
    const [inputData, setInputData] = useState('');
    const todos = [
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
    return (
        <>
            {todos.map((todo, index) => {
                if (index === 0 || index === 1) {
                    return <TodoItem todo={todo} completed={true} display='d-inline' />
                }
                return <TodoItem todo={todo} />
            })}
            <div className="todo-input">
                <input type="text" className="form-control" placeholder="create todo" value={inputData} onChange={(e) => setInputData(e.target.value)} />
            </div>
        </>
    )
}

export default Todos
import React, {useState} from "react";
import {TodoProp} from "./TodoApp";
import "./Todo.css";


function Todo({todo, toggleTodo}: TodoProp) {
    const [isDone, setDone] = useState(todo.done);

    function handleTodoClick(e: React.ChangeEvent<HTMLInputElement>) {
        setDone(e.target.checked);
        toggleTodo(todo.id);
    }

    return (
        <li className="item-text">{todo.text}
            <input type="checkbox"
                   checked={isDone}
                   onChange={handleTodoClick}
                   className="item-check"/>
        </li>);
}

export default Todo;
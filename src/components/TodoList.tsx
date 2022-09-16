import React from 'react';
import {TodoItem, TodoListProp, ToggleTodoType} from "./TodoApp";
import Todo from "./Todo";

function todoIterator(todos: TodoItem[], toggleTodo: ToggleTodoType) {
    return todos.map(todo => <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo}/>);
}

function TodoList({todos, toggleTodo}: TodoListProp) {
    return (
        <ul>
            {todoIterator(todos, toggleTodo)}
        </ul>
    );
}

export default TodoList;
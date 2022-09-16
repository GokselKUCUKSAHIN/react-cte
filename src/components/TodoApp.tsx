import React, {useState, useRef, useEffect, useLayoutEffect} from 'react';
import TodoList from "./TodoList";

export interface TodoItem {
    id: number | string,
    text: string,
    done?: boolean
}

export interface TodoListProp {
    todos: TodoItem[],
    toggleTodo: ToggleTodoType
}

export interface TodoProp {
    todo: TodoItem,
    toggleTodo: ToggleTodoType
}

export type ToggleTodoType = (id: number | string) => void;


const LOCAL_HOST_STORAGE_KEY = "totoApp.todos";

function TodoApp() {
    // State
    const [todoList, setTodoList] = useState<TodoItem[]>([]);

    useEffect(() => {
        localStorage.setItem(LOCAL_HOST_STORAGE_KEY, JSON.stringify(todoList));
    }, [todoList]);

    useLayoutEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_HOST_STORAGE_KEY) ?? "");
        setTodoList(storedTodos);
    }, []);

    const inputRef = useRef<HTMLInputElement>(null);

    function onEnter(event: React.KeyboardEvent, callback: Function) {
        if (event.repeat) return;
        event.key === 'Enter' && callback()
    }

    function toggleTodo(id: number | string) {
        const newTodoList = todoList.slice();
        const todo = newTodoList.find(curr => curr.id === id);
        if (!!todo) todo.done = !todo.done;
        setTodoList(newTodoList);
    }

    function addItem() {
        if (inputRef.current?.name == null) return;
        const inputValue = inputRef.current.value ?? "";
        inputRef.current.value = "";
        const randomInt = ~~(100 * Math.random());
        const newTodo: TodoItem = {
            id: randomInt,
            text: inputValue,
            done: false
        }
        setTodoList(prev => [newTodo, ...prev])
    }

    return (
        <div>
            <input type="text" ref={inputRef} onKeyDown={(e) => onEnter(e, addItem)}/>
            <button onClick={addItem}>Add Item
            </button>
            <TodoList todos={todoList} toggleTodo={toggleTodo}></TodoList>
        </div>
    );
}

export default TodoApp;
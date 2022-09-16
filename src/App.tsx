import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter";
import TodoApp from "./components/TodoApp";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <TodoApp/>
                <Counter name="Counter A"/>
                <Counter name="Counter B"/>
            </header>
        </div>
    );
}

export default App;



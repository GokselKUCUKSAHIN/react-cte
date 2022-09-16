import React, {useState} from 'react';
import "./Counter.css";

export interface CounterProp {
    name?: string;
}

function Counter(props: CounterProp) {

    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <p>Hello this is Counter Component</p>
            <button
                className="CounterButton"
                onClick={() => setCount(count + 1)}
            >{props.name ?? "Generic"}: {count}</button>
        </div>
    );
}

export default Counter;

/*
   <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
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
   </header>
 */
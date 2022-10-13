import React, { useState } from 'react';
import dataFromFile from './helper/data';
import People from './components/People';
import './App.css';
function App() {
    const [data, setData] = useState(dataFromFile);
    const [list, setList] = useState(data.slice(0, 5));
    const [index, setIndex] = useState(0);

    console.log(data.length);
    const previous = () => {
        let newIndex = index - 5;
        if (index >= 5) {
            setIndex(index - 5);
            setList(data.slice(index - 5, index));
        }
    };
    const next = () => {
        if (index > data.length - 1) {
            setIndex(0);
        }
        setList(data.slice(index, index + 5));
        setIndex(index + 5);
        console.log(index);
        console.log(list.length);
    };
    return (
        <main>
            <div className="container">
                <h1>Employee List</h1>
                <p>
                    Employee list: {index + 1} to {index + 5}
                </p>
                <People list={list} />
                <button onClick={() => previous()} className="previous">
                    Previous
                </button>
                <button onClick={() => next()} className="next">
                    next
                </button>
            </div>
        </main>
    );
}

export default App;

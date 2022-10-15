import React, { useState } from 'react';
import dataFromFile from './helper/data';
import People from './components/People';
import './App.css';
function App() {
    const [data, setData] = useState(dataFromFile);
    const [list, setList] = useState(data.slice(0, 5));
    const [index, setIndex] = useState(0);

    // console.log(data.length);
    const previous = () => {
        let tempIndex = index - 5;
        tempIndex < 0 && (tempIndex = data.length - 1);
        setList(data.slice(tempIndex - 5, tempIndex));
        setIndex(tempIndex);
    };
    console.log(index);
    const next = () => {
        let tempIndex = index + 5;
        tempIndex > data.length - 1 && (tempIndex = 0);
        setList(data.slice(tempIndex, tempIndex + 5));
        setIndex(tempIndex);
    };
    console.log(list);
    console.log(index);
    return (
        <main>
            <div className="container">
                <h1>Employee List</h1>
                <p>
                    Employee list: {index + 1} to {index + 5}
                </p>
                <People list={list} />
                <button onClick={previous} className="previous">
                    Previous
                </button>
                <button onClick={next} className="next">
                    next
                </button>
            </div>
        </main>
    );
}

export default App;

import React, { useState } from 'react';
import Counter from "./components/Counter/Counter";
import CellField from "./components/CellField/CellField";
import ResetButton from "./components/ResetButton/ResetButton";
import { nanoid } from "nanoid";
import './App.css';

const App = () => {
    const createItems = () => {
        let array = [];

        const keys = [];

        for (let i = 0; i < 36; i++) {
            keys.push(nanoid());
        }

        for (let i = 0; i < 36; i++) {
            let object = { hasItem: false, clicked: false, id: keys[i] };
            array.push(object);
        }
        console.log(array);

        const randomIndex = Math.floor(Math.random() * (array.length - 1));
        const element = array[randomIndex];
        element.hasItem = true;
        console.log(element.hasItem);

        return array;
    };

    const [items, setItems] = useState(createItems());

    const [attempts, setAttempts] = useState(0);


    const changeBackground = (id: number) => {
        const itemCopy = [...items];
        const indexCopy = { ...itemCopy[id] };
        indexCopy.clicked = true;
        itemCopy[id] = indexCopy;
        setItems(itemCopy);
        setAttempts(attempts + 1);
    };


    const reset = () => {
        setItems(createItems());
        setAttempts(0);
    };

    return (
        <div className="App">
            <h1>Try to play the game "Find the Ring"!</h1>
            <CellField items={items} onCellClick={changeBackground} />
            <Counter attempts={attempts} />
            <ResetButton onReset={reset} />
        </div>
    );
};

export default App;

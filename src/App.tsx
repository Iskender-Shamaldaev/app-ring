import React, { useState } from 'react';
import Counter from "./components/Counter/Counter";
import CellField from "./components/CellField/CellField";
import ResetButton from "./components/ResetButton/ResetButton";
import {ICharacter} from "./types";
import './App.css';

const App = () => {
    const createItems = ():ICharacter[] => {
        let array:ICharacter[] = [];

        for (let i = 0; i < 36; i++) {
            let object:ICharacter = { hasItem: false, clicked: false};
            array.push(object);
        }
        console.log(array);

        const randomIndex = Math.floor(Math.random() * (array.length - 1));
        const element = array[randomIndex];
        element.hasItem = true;
        console.log(element.hasItem);

        return array;
    };

    const [items, setItems] = useState<ICharacter[]>(createItems());

    const [attempts, setAttempts] = useState(0);


    const changeBackground = (index: number) => {
        const itemCopy = [...items];
        const indexCopy = { ...itemCopy[index] };
        indexCopy.clicked = true;
        itemCopy[index] = indexCopy;
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

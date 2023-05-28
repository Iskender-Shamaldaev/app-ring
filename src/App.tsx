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

        const randomIndex = Math.floor(Math.random() * (array.length));
        const element = array[randomIndex];
        element.hasItem = true;

        return array;
    };

    const [items, setItems] = useState<ICharacter[]>(createItems());

    const [tries, setTries] = useState(0);


    const changeBackground = (index: number) => {
        const itemCopy = [...items];
        const indexCopy = { ...itemCopy[index] };
        indexCopy.clicked = true;
        itemCopy[index] = indexCopy;
        setItems(itemCopy);
        setTries(tries + 1);
    };

    const reset = () => {
        setItems(createItems());
        setTries(0);
    };

    return (
        <div className="App">
            <h1>Try to play the game "Find the Ring"!</h1>
            <CellField items={items} onCellClick={changeBackground} />
            <Counter tries={tries} />
            <ResetButton onReset={reset} />
        </div>
    );
};

export default App;

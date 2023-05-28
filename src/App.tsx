import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Cell from "./components/Cell/Cell";

const App = () => {
    const createItems = () => {

        let array = [];

        for (let i = 1; i < 37; i++) {
            let object = {hasItem: false, clicked: false};
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

    const changeBackground = () => {
        const itemCopy = [...items];
        const indexCopy = {...itemCopy[1]};
        indexCopy.clicked = true;
        itemCopy[1] = indexCopy;
        setItems(itemCopy);
        console.log(indexCopy.clicked);
    };


    return (
        <div className="App">
            <h1>Try to play the game "Find the Ring"!</h1>
            <div className="container">
                {items.map((cell) => (
                    <Cell
                        onClickCell={() => changeBackground()}
                    />
                ))}
            </div>
            <Counter cellCount={items.length}/>
            <button>Reset</button>
        </div>
    );
};

export default App;

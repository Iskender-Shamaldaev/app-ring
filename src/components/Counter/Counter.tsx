import React from 'react';

interface CounterProps {
    tries: number;
}

const Counter: React.FC<CounterProps> = ({ tries }) => {
    return <p className="counter">Tries: {tries}</p>;
};

export default Counter;
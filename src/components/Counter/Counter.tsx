import React from 'react';

interface CounterProps {
    attempts: number;
}

const Counter: React.FC<CounterProps> = ({ attempts }) => {
    return <div className="counter">Attempts: {attempts}</div>;
};

export default Counter;
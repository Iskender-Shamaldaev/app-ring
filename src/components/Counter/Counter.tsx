import React from 'react';

interface IProps {
    cellCount: number;
}

const Counter: React.FC<IProps> = ({cellCount}) => {
    const counterStyle: React.CSSProperties = {
        color: 'green',
        fontSize: '22px',
    }

    if(cellCount <= 2){
        counterStyle.color = 'red';
    }

    if(cellCount <= 1){
        counterStyle.fontWeight = 'bold';
    }


    return (
        <p style={counterStyle}>
            Total cells: {cellCount}
        </p>
    );
};

export default Counter;
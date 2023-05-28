import React from 'react';

interface CellProps {
    hasItem: boolean;
    clicked: boolean;
    onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ hasItem, clicked, onClick }) => {
    const cellClassName = clicked ? 'cell-clicked' : 'cell';
    const cellContent = clicked && hasItem ? 'O' : '';

    return (
        <div className={cellClassName} onClick={onClick}>
            {cellContent}
        </div>
    );
};

export default Cell;

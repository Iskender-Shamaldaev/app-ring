import React, {MouseEventHandler} from 'react';

interface CellProps {
    hasItem: boolean;
    clicked: boolean;
    onClick: MouseEventHandler;
}

const Cell: React.FC<CellProps> = ({ hasItem, clicked, onClick }) => {
    let cellClassName = 'cell';
    let cellContent = '';


    if (clicked) {
        cellClassName = 'cell-clicked';
        if (hasItem) {
            cellContent = '💍';
        }
    }

    return (
        <div className={cellClassName} onClick={onClick}>
            {cellContent}
        </div>
    );
};

export default Cell;


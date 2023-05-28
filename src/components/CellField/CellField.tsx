import React from 'react';
import Cell from "../Cell/Cell";

interface CellFieldProps {
    items: { hasItem: boolean; clicked: boolean }[];
    onCellClick: (index: number) => void;
}

const CellField: React.FC<CellFieldProps> = ({ items, onCellClick }) => {
    return (
        <div className="game-board">
            {items.map((item, index) => (
                <Cell
                    key={index}
                    hasItem={item.hasItem}
                    clicked={item.clicked}
                    onClick={() => onCellClick(index)}
                />
            ))}
        </div>
    );
};

export default CellField;


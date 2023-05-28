import React from 'react';
import Cell from "../Cell/Cell";

interface CellFieldProps {
    items: { hasItem: boolean; clicked: boolean }[];
    onCellClick: (id: number) => void;
}

const CellField: React.FC<CellFieldProps> = ({ items, onCellClick }) => {
    return (
        <div className="game-board">
            {items.map((item, id) => (
                <Cell
                    key={id}
                    hasItem={item.hasItem}
                    clicked={item.clicked}
                    onClick={() => onCellClick(id)}
                />
            ))}
        </div>
    );
};

export default CellField;


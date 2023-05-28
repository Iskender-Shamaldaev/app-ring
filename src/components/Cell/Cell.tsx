import React from 'react';

interface ICellProps extends React.PropsWithChildren {
    onClickCell: React.MouseEventHandler;
}

const Cell: React.FC<ICellProps> = ({onClickCell}) => {
    return (
            <div className="cell" onClick={onClickCell}></div>
    );
};

export default Cell;
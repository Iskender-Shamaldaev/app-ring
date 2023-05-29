import React, {MouseEventHandler} from 'react';

interface ResetButtonProps {
    onReset: MouseEventHandler;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onReset }) => {
    return (
        <button className="reset-button" onClick={onReset}>
            Reset
        </button>
    );
};

export default ResetButton;

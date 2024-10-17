import React from 'react';

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    label: string;
    onClick?: () => void;
    styleType?: 'primary' | 'secondary';
    disabled?: boolean;
}

export const Button: React.FunctionComponent<IButtonProps> = (props) => {
    const { label, onClick, styleType, disabled } = props;

    return (
        <button
            className={`btn ${styleType}`}
            onClick={onClick}
            disabled={disabled}
            >
            {label}
        </button>
    );
};
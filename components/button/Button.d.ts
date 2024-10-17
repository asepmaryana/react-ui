import React from 'react';
export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    label: string;
    onClick?: () => void;
    styleType?: 'primary' | 'secondary';
    disabled?: boolean;
}
export declare const Button: React.FunctionComponent<IButtonProps>;

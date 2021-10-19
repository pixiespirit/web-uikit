import React from 'react';
declare type ToggleProps = {
    id?: string;
    checked?: boolean;
    style?: React.CSSProperties;
    disabled?: boolean;
    tabIndex?: number;
    children?: React.ReactNode;
    className?: string;
    size?: 'small' | 'large';
    name?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChecked?: (checked: boolean) => void;
};
export declare const Toggle: React.ForwardRefExoticComponent<ToggleProps & React.RefAttributes<HTMLInputElement>>;
export {};

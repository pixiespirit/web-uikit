import React, { CSSProperties } from 'react';
export interface CheckboxProps {
    checked?: boolean;
    disabled?: boolean;
    defaultChecked?: boolean;
    setChecked?: (checked: boolean) => void;
    style?: CSSProperties;
    children?: React.ReactNode;
}
export declare const CheckIcon: React.FC;
export declare const Checkbox: React.FC<CheckboxProps>;

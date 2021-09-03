/// <reference types="react" />
export declare type CheckboxProps = {
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
export declare const Checkbox: import("react").ForwardRefExoticComponent<CheckboxProps & import("react").RefAttributes<HTMLInputElement>>;

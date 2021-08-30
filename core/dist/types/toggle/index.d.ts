/// <reference types="react" />
export interface ToggleProps {
    name?: string;
    disabled?: boolean;
    checked: boolean;
    setChecked: (checked: boolean) => void;
    defaultChecked?: boolean;
}
export declare const Toggle: (props: ToggleProps) => JSX.Element;

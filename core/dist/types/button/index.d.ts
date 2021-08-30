import React, { CSSProperties } from 'react';
import { KindButton, SizeButtonType } from "./types";
export interface ButtonProps {
    children?: React.ReactNode;
    forwardedRef?: React.ForwardedRef<HTMLButtonElement | HTMLAnchorElement>;
    type?: 'submit' | 'button' | 'reset';
    disabled?: boolean;
    onClick?: React.MouseEventHandler;
    onFocus?: React.FocusEventHandler;
    onBlur?: React.FocusEventHandler;
    autoFocus?: boolean;
    icon?: React.ReactNode;
    stickIconAtPrefix?: boolean;
    kind?: KindButton;
    size?: SizeButtonType;
    inline?: boolean;
    fullWidth?: boolean;
    className?: string;
    style?: CSSProperties;
}
export declare const Button: React.FC<ButtonProps>;
export * from "./types";

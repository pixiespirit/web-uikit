import React, { CSSProperties } from 'react';
export interface TextareaProps {
    defaultValue?: string | number;
    forwardedRef?: React.ForwardedRef<HTMLInputElement>;
    value?: string;
    setValue?: (value: string) => void;
    id?: string;
    readOnly?: boolean;
    label?: string;
    autoComplete?: string;
    autoFocus?: boolean;
    cols?: number;
    rows?: number;
    disabled?: boolean;
    form?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    maxLength?: number;
    minLength?: number;
    name?: string;
    required?: boolean;
    readonly?: boolean;
    spellCheck?: boolean;
    wrap?: string;
    onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
    onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
    onKeyPress?: React.KeyboardEventHandler<HTMLTextAreaElement>;
    onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
    onClick?: React.KeyboardEventHandler<HTMLTextAreaElement>;
    className?: string;
    style?: CSSProperties;
}
export declare const Textarea: React.FC<TextareaProps>;

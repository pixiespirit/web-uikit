import React, { ForwardedRef, ReactNode } from 'react';
export interface RadioProps {
    name: string;
    value: string;
    children: ReactNode;
    disabled?: boolean;
    setValue?: (value: string) => void;
    checked?: boolean;
    defaultChecked?: boolean;
    forwardedRef?: ForwardedRef<HTMLInputElement>;
}
export declare const DotIcon: React.FC;
export declare const Radio: React.FC<RadioProps>;

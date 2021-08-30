import React from 'react';
export interface TextProps {
    color?: string;
    medium?: boolean;
    bold?: boolean;
    semiBold?: boolean;
    extraBold?: boolean;
    italic?: boolean;
    underline?: boolean;
    ellipsis?: boolean;
    maxLength?: number;
    className?: string;
    as?: keyof JSX.IntrinsicElements;
    children: React.ReactNode | string;
}
export declare const Text: React.FC<TextProps>;

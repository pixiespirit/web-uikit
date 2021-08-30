import React, { CSSProperties } from 'react';
export interface CardProps {
    children: React.ReactNode;
    title?: string;
    style?: CSSProperties;
    className?: string;
}
export declare const Card: React.FC<CardProps>;

import React, { CSSProperties } from 'react';
import { Label1 } from '@/typography/label';
import s from '@/card/styles/card.module.css';

export interface CardProps {
    children: React.ReactNode;
    title?: string;
    style?: CSSProperties;
    className?: string;
}

const getClass = (props: CardProps) => {
    const classes = [s.container];
    if (props.className) classes.push(props.className);
    return classes.join(' ');
};

export const Card: React.FC<CardProps> = (props) => {
    return (
        <div style={props.style} className={getClass(props)}>
            {s.title && (
                <div className={s.title}>
                    <Label1 semiBold>{props.title}</Label1>
                </div>
            )}
            <div className={s.body}>{props.children}</div>
        </div>
    );
};

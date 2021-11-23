import React from 'react';
import s from '@/typography/styles/display.module.css';
import { Text, TextProps } from '@/typography';

export const Display1 = ({ className, as, ...props }: TextProps): JSX.Element => {
    return (
        <Text as={as || 'h1'} className={[s.display1, className].join(' ')} {...props}>
            {props.children}
        </Text>
    );
};

export const Display2 = ({ className, as, ...props }: TextProps): JSX.Element => {
    return (
        <Text as={as || 'h1'} className={[s.display2, className].join(' ')} {...props}>
            {props.children}
        </Text>
    );
};

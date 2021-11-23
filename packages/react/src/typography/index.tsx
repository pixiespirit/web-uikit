import React, { CSSProperties } from 'react';
import s from '@/typography/styles/text.module.css';

export interface TextProps {
    // font's style
    color?: string;

    medium?: boolean;
    bold?: boolean;
    semiBold?: boolean;
    extraBold?: boolean;

    italic?: boolean;
    underline?: boolean;

    // use ellipsis for auto truncate when overflow
    ellipsis?: boolean;

    // number of character of the text can be visible
    // only works when children is string
    maxLength?: number;

    className?: string;
    as?: keyof JSX.IntrinsicElements;
    children: React.ReactNode | string;
}

const getClass = (props: TextProps): string => {
    const classes = [];
    classes.push(s.default);
    if (props.medium) classes.push(s.medium);
    if (props.semiBold) classes.push(s.semiBold);
    if (props.bold) classes.push(s.bold);
    if (props.extraBold) classes.push(s.extraBold);
    if (props.italic) classes.push(s.italic);
    if (props.underline) classes.push(s.underline);
    if (props.ellipsis) classes.push(s.ellipsis);
    if (props.className) classes.push(props.className);
    return classes.join(' ');
};

const getStyles = (props: TextProps): CSSProperties => {
    const styles: CSSProperties = {};
    if (props.color) {
        styles.color = props.color;
    }
    return styles;
};

const textChildren = (props: TextProps) => {
    if (typeof props.children === 'string' && props.maxLength) {
        const truncatedText = (props.children as string).slice(
            0,
            Math.min(props.maxLength as number, (props.children as string).length)
        );
        // TODO: What if the end of the `truncatedText` is a space?
        return `${truncatedText}...`;
    }
    return props.children;
};

export const Text: React.FC<TextProps> = (props) => {
    const Tag = props.as as keyof JSX.IntrinsicElements;
    return (
        <Tag style={getStyles(props)} className={getClass(props)}>
            {textChildren(props)}
        </Tag>
    );
};

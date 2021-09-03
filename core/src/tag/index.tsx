import React, { CSSProperties } from 'react';
import { KindTag } from '@/tag/types';
import s from '@/tag/styles/tag.module.css';
import primary from '@/tag/styles/primary.module.css';
import warning from '@/tag/styles/warning.module.css';
import { Label4 } from '@/typography/label';

export interface TagProps {
    children: React.ReactNode;
    className?: string;
    style?: CSSProperties;

    kind?: KindTag;
}

const getClass = (props: TagProps): string => {
    const classes: Array<string> = [s.tag];

    /**
     * Tag kind style
     * Default: primary
     */
    switch (props.kind) {
        case KindTag.WARNING:
            classes.push(warning.root);
            break;

        case KindTag.PRIMARY:
        default:
            classes.push(primary.root);
            break;
    }

    if (props.className) classes.push(props.className);

    return classes.join(' ');
};

export const Tag: React.FC<TagProps> = (props) => {
    const tagChildren =
        typeof props.children === 'string' ? <Label4 medium children={props.children} /> : props.children;

    return <span style={props.style} className={getClass(props)} children={tagChildren} />;
};

export * from '@/tag/types';

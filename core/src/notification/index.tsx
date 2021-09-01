import React, { CSSProperties } from 'react';
import s from '@/notification/styles/notification.module.css';
import { KindNotification } from '@/notification/types';

export interface NotificationProps {
    kind?: KindNotification;

    className?: string;
    style?: CSSProperties;
}

const getClass = (props: NotificationProps) => {
    const classes: Array<string> = [s.notification];

    switch (props.kind) {
        case KindNotification.DEFAULT:
        default:
            classes.push(s.default);
            break;
        case KindNotification.POSITIVE:
            classes.push(s.positive);
            break;
        case KindNotification.WARNING:
            classes.push(s.warning);
            break;
        case KindNotification.NEGATIVE:
            classes.push(s.negative);
            break;
    }

    if (props.className) classes.push(props.className);

    return classes.join(' ');
};

export const Notification: React.FC<NotificationProps> = (props) => {
    return <div className={getClass(props)} children={props.children} />;
};

export * from '@/notification/types';

import React, { CSSProperties } from 'react';
import { KindNotification } from "./types";
export interface NotificationProps {
    kind?: KindNotification;
    className?: string;
    style?: CSSProperties;
}
export declare const Notification: React.FC<NotificationProps>;
export * from "./types";

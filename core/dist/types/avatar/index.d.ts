import React from 'react';
import { SizeAvatar } from "./types";
export interface AvatarProps {
    src: string;
    alt?: string;
    /**
     * Width and height are in pixels (px)
     */
    width?: number;
    height?: number;
    size?: SizeAvatar;
    circle?: boolean;
    fullWidth?: boolean;
}
export declare const Avatar: React.FC<AvatarProps>;
export * from "./types";

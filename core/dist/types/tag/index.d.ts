import React, { CSSProperties } from 'react';
import { KindTag } from "./types";
export interface TagProps {
    children: React.ReactNode;
    className?: string;
    style?: CSSProperties;
    kind?: KindTag;
}
export declare const Tag: React.FC<TagProps>;
export * from "./types";

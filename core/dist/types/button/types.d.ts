import { DivSize } from "../div";
export interface SizeButtonType {
    root: string;
    iconMargin: DivSize;
}
export declare type SizeButtonKey = 'SMALL' | 'MEDIUM' | 'LARGE' | 'XLARGE';
export declare const SizeButton: Record<SizeButtonKey, SizeButtonType>;
export declare enum KindButton {
    PRIMARY = 0,
    SECONDARY = 1,
    TERTIARY = 2,
    TEXT_ONLY = 3,
    GHOST = 4
}

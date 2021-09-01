import size from '@/button/styles/size.module.css';
import { DivSize } from '@/div';

export interface SizeButtonType {
    root: string;
    iconMargin: DivSize;
}

export type SizeButtonKey = 'SMALL' | 'MEDIUM' | 'LARGE' | 'XLARGE';

export const SizeButton: Record<SizeButtonKey, SizeButtonType> = {
    SMALL: {
        root: size.small,
        iconMargin: 4
    },
    MEDIUM: {
        root: size.medium,
        iconMargin: 8
    },
    LARGE: {
        root: size.large,
        iconMargin: 8
    },
    XLARGE: {
        root: size.xlarge,
        iconMargin: 8
    }
};

export enum KindButton {
    PRIMARY,
    SECONDARY,
    GHOST
}

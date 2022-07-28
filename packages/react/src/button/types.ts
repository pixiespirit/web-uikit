import size from '@/button/styles/size.module.css';
import { DivSize } from '@/div';

export interface SizeButtonType {
    root: string;
    iconMargin: DivSize;
    x_key: SizeButtonKey;
}

export type SizeButtonKey = 'SMALL' | 'MEDIUM' | 'LARGE' | 'XLARGE';

export const SizeButton: Record<SizeButtonKey, SizeButtonType> = {
    SMALL: {
        root: size.small,
        iconMargin: 4,
        x_key: 'SMALL'
    },
    MEDIUM: {
        root: size.medium,
        iconMargin: 8,
        x_key: 'MEDIUM'
    },
    LARGE: {
        root: size.large,
        iconMargin: 8,
        x_key: 'LARGE'
    },
    XLARGE: {
        root: size.xlarge,
        iconMargin: 8,
        x_key: 'XLARGE'
    }
};

export enum KindButton {
    PRIMARY,
    BRAND,
    SECONDARY,
    GHOST
}

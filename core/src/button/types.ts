import size from '@/button/styles/size.module.css';
import { DivSize } from '@/div';

export interface SizeButtonType {
  root: string;
  iconMargin: DivSize;
}

export type SizeButtonKey = 'MEDIUM' | 'SMALL';

export const SizeButton: Record<SizeButtonKey, SizeButtonType> = {
  MEDIUM: {
    root: size.medium,
    iconMargin: 8
  },
  SMALL: {
    root: size.small,
    iconMargin: 4
  }
};

export enum KindButton {
  PRIMARY,
  SECONDARY,
  TERTIARY,
  TEXT_ONLY
}

import React from 'react';
import s from '@/div/styles/div.module.css';

export type DivSize = 4 | 8 | 12 | 16 | 20 | 24 | 32 | 48 | 64 | 96;

export const DivPx = ({ size }: { size: DivSize }): JSX.Element => (
  <span className={s.px} style={{ width: size, height: size }} />
);

export const DivGrow = (): JSX.Element => <span className={s.grow} />;

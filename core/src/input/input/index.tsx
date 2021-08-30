import React, { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import s from './index.module.css';
import { cx } from '@/utils/dom';
import { SFC } from '@/input/types';

export type TInputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  sizes?: TInputSize;
}

export const Input: SFC<InputProps> = forwardRef(
  ({ sizes = 'md', ...props }, ref: ForwardedRef<HTMLInputElement>) => {
    const _className = cx(s.input, props.className, s[sizes]);

    return <input ref={ref} className={_className} {...props} />;
  },
);

Input.id = 'Input';

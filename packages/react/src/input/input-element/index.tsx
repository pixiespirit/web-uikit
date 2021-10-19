import s from './index.module.css';
import { cx } from '@/utils/dom';
import { ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import { SFC } from '@/input/types';

export interface InputElementProps extends HTMLAttributes<HTMLDivElement> {
    placement?: 'left' | 'right';
    className?: string;
    ref?: ForwardedRef<HTMLDivElement>;
}

export const InputElement: SFC<InputElementProps> = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
    const { placement = 'left', className, ...rest } = props;
    const attr = placement === 'left' ? 'insetStart' : 'insetEnd';
    const _className = cx(s.absolute, s.centerItem, s[attr], className, props?.onClick ? s.cursorPointer : '');
    return <div className={_className} ref={ref} {...rest} />;
});

InputElement.id = 'InputElement';

export const InputLeftIcon: SFC<InputElementProps> = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
    return <InputElement ref={ref} placement="left" {...props} />;
});

InputLeftIcon.id = 'InputLeftIcon';

export const InputRightIcon: SFC<InputElementProps> = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
    return <InputElement ref={ref} placement="right" {...props} />;
});

InputRightIcon.id = 'InputRightIcon';

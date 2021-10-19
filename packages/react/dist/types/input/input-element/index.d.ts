import { ForwardedRef, HTMLAttributes } from 'react';
import { SFC } from "../types";
export interface InputElementProps extends HTMLAttributes<HTMLDivElement> {
    placement?: 'left' | 'right';
    className?: string;
    ref?: ForwardedRef<HTMLDivElement>;
}
export declare const InputElement: SFC<InputElementProps>;
export declare const InputLeftIcon: SFC<InputElementProps>;
export declare const InputRightIcon: SFC<InputElementProps>;

import { InputHTMLAttributes } from 'react';
import { SFC } from "../types";
export declare type TInputSize = 'sm' | 'md' | 'lg';
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    sizes?: TInputSize;
}
export declare const Input: SFC<InputProps>;

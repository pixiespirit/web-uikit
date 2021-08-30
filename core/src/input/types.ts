import {
  WeakValidationMap,
  ValidationMap,
  PropsWithChildren,
  ReactElement
} from 'react';
import { ChangeEvent, CSSProperties, ReactChild } from 'react';

export type InputType =
  | 'email'
  | 'number'
  | 'hidden'
  | 'text'
  | 'password'
  | 'file'
  | 'submit'
  | 'reset'
  | 'month'
  | 'image'
  | 'checkbox'
  | 'search'
  | 'radio';
export interface InputBaseProps {
  children?: ReactChild;
  className?: string;
  id: string;
  label?: string;
  name?: string;
  onBlur: (event: ChangeEvent<HTMLInputElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  style?: CSSProperties;
  type: InputType;
  value?: string;
}

interface FunctionComponent<P = Record<string, unknown>> {
  (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  propTypes?: WeakValidationMap<P>;
  contextTypes?: ValidationMap<any>;
  defaultProps?: Partial<P>;
  displayName?: string;
  id?: string;
}

export type SFC<P = Record<string, any>> = FunctionComponent<P>;

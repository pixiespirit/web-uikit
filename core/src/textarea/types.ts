import {
  WeakValidationMap,
  ValidationMap,
  PropsWithChildren,
  ReactElement,
  CSSProperties,
  TextareaHTMLAttributes
} from 'react';

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  defaultValue?: string | number;
  forwardedRef?: React.ForwardedRef<HTMLTextAreaElement>;
  value?: string;
  setValue?: (value: string) => void;

  // Attributes
  id?: string;
  label?: string;
  caption?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  cols?: number;
  rows?: number;
  disabled?: boolean;
  form?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  maxLength?: number;
  minLength?: number;
  name?: string;
  required?: boolean;
  readonly?: boolean;
  spellCheck?: boolean;
  wrap?: string;
  invalid?: boolean;

  // Styling
  className?: string;
  style?: CSSProperties;
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

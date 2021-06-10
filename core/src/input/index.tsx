import React, { CSSProperties, useMemo } from 'react';
import s from '@/input/styles/index.module.css';

export interface InputOverrides {
  input?: string;
  wrapper?: string;
}

export interface InputProps {
  type?: string;
  defaultValue?: string | number;
  forwardedRef?: React.ForwardedRef<HTMLInputElement>;
  value?: string;
  setValue?: (value: string) => void;
  classOverrides?: InputOverrides;

  // Attributes
  id?: string;
  disabled?: boolean;
  readOnly?: boolean;
  label?: string;
  autoFocus?: boolean;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  maxLength?: number;
  required?: boolean;
  placeholder?: string;

  // Events
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onClick?: React.KeyboardEventHandler<HTMLInputElement>;

  // Styling
  className?: string;
  style?: CSSProperties;
}

export const Input: React.FC<InputProps> = (props) => {
  const classes = useMemo(() => {
    return {
      wrapper: [s.inputWrapper, props?.classOverrides?.wrapper ?? ''].join(' '),
      input: [s.input, props?.classOverrides?.input ?? ''].join(' ')
    };
  }, [props.classOverrides]);

  return (
    <div style={props.style} className={classes.wrapper}>
      <input
        ref={props.forwardedRef as any}
        // Value
        type={props.type}
        defaultValue={props.defaultValue}
        value={props.value}
        onChange={(event) => {
          props.setValue?.(event.currentTarget.value);
        }}
        // Event handlers
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        onKeyDown={props.onKeyDown}
        onKeyPress={props.onKeyPress}
        onKeyUp={props.onKeyUp}
        // Properties
        id={props.id}
        className={classes.input}
        readOnly={props.readOnly}
        disabled={props.disabled}
        placeholder={props.placeholder ?? ' '}
        autoFocus={props.autoFocus}
        aria-label={props['aria-label']}
        aria-labelledby={props['aria-labelledby']}
        maxLength={props.maxLength}
        required={props.required}
      />
      {/*If placeholder attribute exist, the component will use float label style, or it can be use normal placeholder style.*/}
      {!props.placeholder && <label className={s.label}>{props.label}</label>}
    </div>
  );
};

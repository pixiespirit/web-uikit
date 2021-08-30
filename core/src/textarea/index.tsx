import React, { CSSProperties } from 'react';
import input from '@/input/input/index.module.css';
import s from '@/textarea/styles/index.module.css';

export interface TextareaProps {
  defaultValue?: string | number;
  forwardedRef?: React.ForwardedRef<HTMLInputElement>;
  value?: string;
  setValue?: (value: string) => void;

  // Attributes
  id?: string;
  readOnly?: boolean;
  label?: string;
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
  //placeholder?: string;
  readonly?: boolean;
  spellCheck?: boolean;
  wrap?: string;

  // Events
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  onClick?: React.KeyboardEventHandler<HTMLTextAreaElement>;

  // Styling
  className?: string;
  style?: CSSProperties;
}

export const Textarea: React.FC<TextareaProps> = (props) => {
  return (
    <div style={props.style} className={input.inputWrapper}>
      <textarea
        ref={props.forwardedRef as any}
        // Value
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
        className={[input.input, s.textarea].join(' ')}
        readOnly={props.readOnly}
        disabled={props.disabled}
        placeholder=" "
        autoFocus={props.autoFocus}
        aria-label={props['aria-label']}
        aria-labelledby={props['aria-labelledby']}
        maxLength={props.maxLength}
        minLength={props.minLength}
        required={props.required}
        autoComplete={props.autoComplete}
        cols={props.cols}
        rows={props.rows}
        form={props.form}
        name={props.name}
        spellCheck={props.spellCheck}
        wrap={props.wrap}
      />
      <label className={input.label}>{props.label}</label>
    </div>
  );
};

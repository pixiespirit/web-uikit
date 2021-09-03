import { ForwardedRef, forwardRef } from 'react';
import { SFC, TextareaProps } from '@/textarea/types';
import s from '@/textarea/textarea/styles/index.module.css';
import classNames from 'classnames';

export const Textarea: SFC<TextareaProps> = forwardRef(
  (props, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div
        ref={ref}
        style={props.style}
        className={classNames(
          s.textareaWrapper,
          props.disabled && s.disabled,
          props.readonly && s.readonly,
          props.invalid && s.invalid
        )}
      >
        <div style={{ display: 'flex' }}>
          <div className={s.label}>{props.label}</div>
          {props.required && <div className={s.requiredLabel}>*</div>}
        </div>

        <textarea
          // Value
          defaultValue={props.defaultValue}
          value={props.value}
          onChange={(event) => {
            props.setValue?.(event.currentTarget.value);
          }}
          // Properties
          id={props.id}
          className={[s.textarea, props.className].join(' ')}
          readOnly={props.readOnly}
          disabled={props.disabled}
          placeholder={props.placeholder}
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
        <div className={s.caption}>{props.caption}</div>
      </div>
    );
  }
);

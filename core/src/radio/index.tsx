import React, { ForwardedRef, ReactNode } from 'react';
import s from '@/radio/styles/styles.module.css';
import { Body1 } from '@/typography/body';

export interface RadioProps {
  name: string;
  value: string;
  children: ReactNode;
  disabled?: boolean;
  setValue?: (value: string) => void;
  checked?: boolean;
  defaultChecked?: boolean;
  forwardedRef?: ForwardedRef<HTMLInputElement>;
}

export const DotIcon: React.FC = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 8 16"
      className={s.dotIcon}
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"
      />
    </svg>
  );
};

export const Radio: React.FC<RadioProps> = (props) => {
  return (
    <label className={s.container}>
      <input
        type="radio"
        className={s.input}
        name={props.name}
        value={props.value}
        // Controlled
        checked={props.checked}
        onChange={(event) => props.setValue?.(event.target.value)}
        disabled={props.disabled}
        // Uncontrolled
        defaultChecked={props.defaultChecked}
        ref={props.forwardedRef}
      />
      <span className={s.checkboxDot}>
        <DotIcon />
      </span>
      <Body1 className={s.label}>{props.children}</Body1>
    </label>
  );
};

import React, { CSSProperties } from 'react';
import s from './styles/checkbox.module.css';
import { Body1 } from '../typography/body';

export interface CheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  defaultChecked?: boolean;
  setChecked?: (checked: boolean) => void;

  style?: CSSProperties;
  children?: React.ReactNode;
}

export const CheckIcon: React.FC = () => {
  return (
    <svg
      className={s.checkIcon}
      width="1em"
      height="1em"
      viewBox="0 0 14 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="white"
        d="M12.4739 0.346983C12.6545 0.15247 12.9557 0.132996 13.1598 0.302625L13.588 0.658342C13.8106 0.843311 13.8302 1.17809 13.6306 1.38771L5.82127 9.58933C5.63644 9.78344 5.33143 9.79728 5.12978 9.62071L0.494688 5.5622C0.28929 5.38235 0.266125 5.071 0.442649 4.86273L0.841462 4.39221C1.02346 4.17749 1.34677 4.15525 1.55646 4.34304L5.34481 7.73586C5.42604 7.80862 5.55059 7.80288 5.6248 7.72297L12.4739 0.346983Z"
      />
    </svg>
  );
};

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  return (
    <label className={s.container}>
      <input
        type="checkbox"
        className={s.input}
        disabled={props.disabled}
        // Uncontrolled
        defaultChecked={props.defaultChecked}
        // Controlled
        checked={props.checked}
        onChange={(e) => props.setChecked?.(e.target.checked)}
      />
      <span className={s.checkboxCheck}>
        <CheckIcon />
      </span>
      <Body1 className={s.label}>{props.children}</Body1>
    </label>
  );
};

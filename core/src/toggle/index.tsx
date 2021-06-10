import classnames from 'classnames';
import React from 'react';
import s from '@/toggle/styles/toggle.module.css';

export interface ToggleProps {
  name?: string;
  disabled?: boolean;
  checked: boolean;
  setChecked: (checked: boolean) => void;
  defaultChecked?: boolean;
}

const getColorClass = (props: ToggleProps) => {
  if (props.disabled) {
    if (props.checked) return s.disabledOn;

    return s.disabledOff;
  } else {
    if (props.checked) return s.on;

    return s.off;
  }
};

export const Toggle = (props: ToggleProps) => {
  return (
    <label className={classnames(s.switch, getColorClass(props))}>
      <input
        type="checkbox"
        className={s.input}
        name={props.name}
        checked={props.checked}
        onChange={(e) => props.setChecked(e.target.checked)}
        defaultChecked={props.defaultChecked}
        disabled={props.disabled}
      />
      <div className={s.circle} />
    </label>
  );
};

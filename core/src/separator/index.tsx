import React from 'react';
import s from './styles/separator.module.css';

export interface SeparatorProps {
  label?: string;
}

export const Separator: React.FC<SeparatorProps> = (props) => {
  return <div className={s.separator}>{props.label}</div>;
};

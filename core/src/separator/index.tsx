import React from 'react';
import s from '@/separator/styles/separator.module.css';

export interface SeparatorProps {
  label?: string;
  className?: string;
}

export const Separator: React.FC<SeparatorProps> = (props) => {
  const classNames = [s.separator, s.defaultMargin];
  if (props.className) classNames.push(props.className);
  return <div className={classNames.join(' ')}>{props.label}</div>;
};

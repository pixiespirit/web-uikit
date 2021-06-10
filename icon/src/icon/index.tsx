import React from 'react';
import s from '@/icon/styles/icon.module.css';

export interface IconProps {
  display?: 'block' | 'inline';
  size?: number;
  color?: string;
  title?: string;
}

const getClass = (props: IconProps) => {
  const classes = [s.icon];

  switch (props.display) {
    case 'inline':
      classes.push(s.inlineBlock);
      break;
    case 'block':
    default:
      classes.push(s.block);
      break;
  }

  return classes.join(' ');
};

export const Icon: React.FC<IconProps> = (props) => {
  return (
    <span
      role="img"
      aria-label={props.title}
      className={getClass(props)}
      style={{ color: props.color, fontSize: props.size }}
    >
      {props.children}
    </span>
  );
};

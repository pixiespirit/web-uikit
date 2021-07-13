import React from 'react';
import s from '@/separator/styles/separator.module.css';

export interface SeparatorProps {
  label?: string;
  className?: string;
}

export const Separator: React.FC<SeparatorProps> = (props) => {
  return (
    <div className={[s.separator, props.className ?? ''].join(' ')}>
      {props.label}
    </div>
  );
};

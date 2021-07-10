import React from 'react';
import s from './styles/label.module.css';
import { Text, TextProps } from '.';

export const Label1: React.FC<TextProps> = ({ className, as, ...props }) => {
  return (
    <Text as={as || 'p'} className={[s.label1, className].join(' ')} {...props}>
      {props.children}
    </Text>
  );
};

export const Label2: React.FC<TextProps> = ({ className, as, ...props }) => {
  return (
    <Text as={as || 'p'} className={[s.label2, className].join(' ')} {...props}>
      {props.children}
    </Text>
  );
};

export const Label3: React.FC<TextProps> = ({ className, as, ...props }) => {
  return (
    <Text as={as || 'p'} className={[s.label3, className].join(' ')} {...props}>
      {props.children}
    </Text>
  );
};

export const Label4: React.FC<TextProps> = ({ className, as, ...props }) => {
  return (
    <Text as={as || 'p'} className={[s.label4, className].join(' ')} {...props}>
      {props.children}
    </Text>
  );
};

export const Label5: React.FC<TextProps> = ({ className, as, ...props }) => {
  return (
    <Text as={as || 'p'} className={[s.label5, className].join(' ')} {...props}>
      {props.children}
    </Text>
  );
};

export const Label6: React.FC<TextProps> = ({ className, as, ...props }) => {
  return (
    <Text as={as || 'p'} className={[s.label6, className].join(' ')} {...props}>
      {props.children}
    </Text>
  );
};

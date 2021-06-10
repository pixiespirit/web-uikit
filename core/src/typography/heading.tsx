import React from 'react';
import s from '@/typography/styles/heading.module.css';
import { Text, TextProps } from '@/typography';

export const H1: React.FC<TextProps> = ({ className, as, ...props }) => {
  return (
    <Text
      as={as || 'h1'}
      className={[s.heading1, className].join(' ')}
      {...props}
    >
      {props.children}
    </Text>
  );
};

export const H2: React.FC<TextProps> = ({ className, as, ...props }) => {
  return (
    <Text
      as={as || 'h2'}
      className={[s.heading2, className].join(' ')}
      {...props}
    >
      {props.children}
    </Text>
  );
};

export const H3: React.FC<TextProps> = ({ className, as, ...props }) => {
  return (
    <Text
      as={as || 'h3'}
      className={[s.heading3, className].join(' ')}
      {...props}
    >
      {props.children}
    </Text>
  );
};

export const H4: React.FC<TextProps> = ({ className, as, ...props }) => {
  return (
    <Text
      as={as || 'h4'}
      className={[s.heading4, className].join(' ')}
      {...props}
    >
      {props.children}
    </Text>
  );
};

export const H5: React.FC<TextProps> = ({ className, as, ...props }) => {
  return (
    <Text
      as={as || 'h5'}
      className={[s.heading5, className].join(' ')}
      {...props}
    >
      {props.children}
    </Text>
  );
};

export const H6: React.FC<TextProps> = ({ className, as, ...props }) => {
  return (
    <Text
      as={as || 'h6'}
      className={[s.heading6, className].join(' ')}
      {...props}
    >
      {props.children}
    </Text>
  );
};

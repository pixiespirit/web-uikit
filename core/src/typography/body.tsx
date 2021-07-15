import React from 'react';
import s from '@/typography/styles/body.module.css';
import { Text, TextProps } from '@/typography';

/**
 *
 * @deprecated Since version 0.0.12 and will be deleted in version 0.1.0
 */
export const Body1: React.FC<TextProps> = ({ className, as, ...props }) => {
  return (
    <Text as={as || 'p'} className={[s.body1, className].join(' ')} {...props}>
      {props.children}
    </Text>
  );
};

/**
 *
 * @deprecated Since version 0.0.12 and will be deleted in version 0.1.0
 */
export const Body2: React.FC<TextProps> = ({ className, as, ...props }) => {
  return (
    <Text as={as || 'p'} className={[s.body2, className].join(' ')} {...props}>
      {props.children}
    </Text>
  );
};

/**
 *
 * @deprecated Since version 0.0.12 and will be deleted in version 0.1.0
 */
export const Body3: React.FC<TextProps> = ({ className, as, ...props }) => {
  return (
    <Text as={as || 'p'} className={[s.body3, className].join(' ')} {...props}>
      {props.children}
    </Text>
  );
};

/**
 *
 * @deprecated Since version 0.0.12 and will be deleted in version 0.1.0
 */
export const Body4: React.FC<TextProps> = ({ className, as, ...props }) => {
  return (
    <Text as={as || 'p'} className={[s.body4, className].join(' ')} {...props}>
      {props.children}
    </Text>
  );
};

/**
 *
 * @deprecated Since version 0.0.12 and will be deleted in version 0.1.0
 */
export const Body5: React.FC<TextProps> = ({ className, as, ...props }) => {
  return (
    <Text as={as || 'p'} className={[s.body5, className].join(' ')} {...props}>
      {props.children}
    </Text>
  );
};

/**
 *
 * @deprecated Since version 0.0.12 and will be deleted in version 0.1.0
 */
export const Body6: React.FC<TextProps> = ({ className, as, ...props }) => {
  return (
    <Text as={as || 'p'} className={[s.body6, className].join(' ')} {...props}>
      {props.children}
    </Text>
  );
};

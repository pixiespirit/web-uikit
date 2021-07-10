import React, { CSSProperties } from 'react';
import { KindButton, SizeButton, SizeButtonType } from './types';
import s from './styles/button.module.css';
import primary from './styles/primary.module.css';
import secondary from './styles/secondary.module.css';
import tertiary from './styles/tertiary.module.css';
import textOnly from './styles/text-only.module.css';
import { DivPx } from '../div';
import classNames from 'classnames';

export interface ButtonProps {
  children?: React.ReactNode;
  forwardedRef?: React.ForwardedRef<HTMLButtonElement | HTMLAnchorElement>;

  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
  onFocus?: React.FocusEventHandler;
  onBlur?: React.FocusEventHandler;
  autoFocus?: boolean;

  icon?: React.ReactNode;
  stickIconAtPrefix?: boolean;
  kind?: KindButton;
  size?: SizeButtonType;
  inline?: boolean;
  fullWidth?: boolean;

  className?: string;
  style?: CSSProperties;
}

const getClass = (props: ButtonProps): string => {
  /**
   * Default button styles
   */
  const classes: Array<string> = [s.button];

  const btnSize = props.size ?? SizeButton.MEDIUM;
  classes.push(btnSize.root);

  /**
   * Button kind style
   * Default: primary
   */
  switch (props.kind) {
    case KindButton.PRIMARY:
    default:
      classes.push(primary.root);
      break;
    case KindButton.SECONDARY:
      classes.push(secondary.root);
      break;
    case KindButton.TEXT_ONLY:
      classes.push(textOnly.root);
      break;
    case KindButton.TERTIARY:
      classes.push(tertiary.root);
      break;
  }

  if (props.inline) classes.push(s.inline);
  if (props.fullWidth) classes.push(s.fullWidth);
  if (props.className) classes.push(props.className);

  return classes.join(' ');
};

const ButtonChildren: React.FC<ButtonProps> = (props) => {
  const btnSize = props.size ?? SizeButton.MEDIUM;
  return (
    <React.Fragment>
      {props.icon && <span className={s.icon}>{props.icon}</span>}
      {props.icon && !props.stickIconAtPrefix && props.children && (
        <DivPx size={btnSize.iconMargin} />
      )}
      {props.children && (
        <span
          className={classNames(s.text, props.stickIconAtPrefix && s.textGrow)}
        >
          {props.children}
        </span>
      )}
    </React.Fragment>
  );
};

export const Button: React.FC<ButtonProps> = (props) => {
  const common = {
    className: getClass(props),
    ref: props.forwardedRef as any,
    children: <ButtonChildren {...props} />
  };

  return (
    <button
      {...common}
      style={props.style}
      onClick={props.onClick}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      disabled={props.disabled}
      type={props.type ?? 'button'}
    />
  );
};

export * from './types';

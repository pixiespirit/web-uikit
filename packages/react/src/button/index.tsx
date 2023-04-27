import React, { ButtonHTMLAttributes, CSSProperties, useEffect, useRef } from 'react';
import { KindButton, SizeButton, SizeButtonType } from '@/button/types';
import s from '@/button/styles/button.module.css';
import primary from '@/button/styles/primary.module.css';
import brand from '@/button/styles/brand.module.css';
import secondary from '@/button/styles/secondary.module.css';
import ghost from '@/button/styles/ghost.module.css';
import { DivPx } from '@/div';
import classNames from 'classnames';
import Spinner from '@/spinner';

export interface ButtonProps {
    children?: React.ReactNode;
    forwardedRef?: React.ForwardedRef<HTMLButtonElement | HTMLAnchorElement>;

    type?: 'submit' | 'button' | 'reset';
    disabled?: boolean;
    loading?: boolean;
    onClick?: React.MouseEventHandler;
    onFocus?: React.FocusEventHandler;
    onBlur?: React.FocusEventHandler;
    autoFocus?: boolean;

    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    stickIconAtPrefix?: boolean;
    kind?: KindButton;
    rounded?: boolean;
    size?: SizeButtonType;
    inline?: boolean;
    fullWidth?: boolean;

    className?: string;
    style?: CSSProperties;

    buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
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
        case KindButton.SECONDARY:
            classes.push(secondary.root);
            break;
        case KindButton.GHOST:
            classes.push(ghost.root);
            break;
        case KindButton.BRAND:
            classes.push(brand.root);
            break;
        case KindButton.PRIMARY:
        default:
            classes.push(primary.root);
            break;
    }

    if (props.inline) classes.push(s.inline);
    if (props.fullWidth) classes.push(s.fullWidth);
    if (props.rounded) classes.push(s.rounded);
    if (props.className) classes.push(props.className);

    return classes.join(' ');
};

const ButtonChildren: React.FC<ButtonProps> = (props) => {
    const btnSize = props.size ?? SizeButton.MEDIUM;
    return (
        <React.Fragment>
            {props.leftIcon && <span className={s.icon}>{props.leftIcon}</span>}
            {props.leftIcon && !props.stickIconAtPrefix && props.children && <DivPx size={btnSize.iconMargin} />}
            {props.children && (
                <span className={classNames(s.text, props.stickIconAtPrefix && s.textGrow)}>{props.children}</span>
            )}
            {props.rightIcon && !props.stickIconAtPrefix && props.children && <DivPx size={btnSize.iconMargin} />}
            {props.rightIcon && <span className={s.icon}>{props.rightIcon}</span>}
        </React.Fragment>
    );
};

export const Button: React.FC<ButtonProps> = (props) => {
    const spineerType = props.kind && [KindButton.GHOST, KindButton.SECONDARY].includes(props.kind) ? 'dark' : 'light';

    const containerRef = useRef<HTMLDivElement>(null);

    const common = {
        ...props.buttonProps,
        className: getClass(props),
        ref: props.forwardedRef as any,
        children: props.loading ? (
            <Spinner size={props.size?.x_key || 'MEDIUM'} type={spineerType} />
        ) : (
            <ButtonChildren {...props} />
        )
    };

    const style = { ...props.style };

    return (
        <div ref={containerRef}>
            <button
                {...common}
                style={style}
                onClick={props.onClick}
                onFocus={props.onFocus}
                onBlur={props.onBlur}
                disabled={props.loading || props.disabled}
                type={props.type ?? 'button'}
            />
        </div>
    );
};

export * from '@/button/types';

import classNames from 'classnames';
import React, { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from 'react';
import styles from './styles/TextBox.module.css';

type TextboxProps = Partial<{
    size: 'small' | 'medium' | 'large';
    invalid: boolean;
    addonLeft: JSX.Element | string;
    addonRight: JSX.Element | string;
    iconLeft: JSX.Element | string;
    iconRight: JSX.Element | string;
    disabled?: boolean;
    onClickLeftIcon?: (event: React.MouseEvent<HTMLElement>) => void;
    onClickRightIcon?: (event: React.MouseEvent<HTMLElement>) => void;
    onClickLeftAddon?: (event: React.MouseEvent<HTMLElement>) => void;
    onClickRightAddon?: (event: React.MouseEvent<HTMLElement>) => void;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;

    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> &
    InputHTMLAttributes<HTMLInputElement>;

const InternalTextBox: ForwardRefRenderFunction<HTMLInputElement, TextboxProps> = (
    {
        size = 'medium',
        invalid,
        iconLeft,
        iconRight,
        addonLeft,
        addonRight,
        disabled,
        onClickLeftIcon,
        onClickRightIcon,
        onClickLeftAddon,
        onClickRightAddon,
        value,
        onChange,
        ...props
    },
    ref
) => {
    return (
        <div
            className={classNames(styles.input, styles[size], {
                [styles.invalid]: invalid,
                [styles.disabled]: disabled
            })}
        >
            {addonLeft && (
                <div
                    className={classNames(styles.addonBefore, styles.addon, onClickLeftAddon && styles.pointer)}
                    onClick={onClickLeftAddon}
                >
                    {addonLeft}
                </div>
            )}
            {iconLeft && (
                <div
                    className={[styles.iconBefore, onClickLeftIcon && styles.pointer].join(' ')}
                    onClick={onClickLeftIcon}
                >
                    {iconLeft}
                </div>
            )}
            <input
                {...props}
                {...props.inputProps}
                type="text"
                ref={ref}
                {...props}
                disabled={disabled}
                value={value}
                onChange={onChange}
            />
            {iconRight && (
                <div
                    className={[styles.iconAfter, onClickRightIcon && styles.pointer].join(' ')}
                    onClick={onClickRightIcon}
                >
                    {iconRight}
                </div>
            )}
            {addonRight && (
                <div className={classNames(styles.addonAfter, styles.addon)} onClick={onClickRightAddon}>
                    {addonRight}
                </div>
            )}
        </div>
    );
};

export const Textbox = forwardRef(InternalTextBox);

import classNames from 'classnames';
import React, { forwardRef, ForwardRefRenderFunction, HTMLAttributes } from 'react';
import styles from './styles/TextBox.module.css';

type TextboxProps = HTMLAttributes<HTMLInputElement> &
    Partial<{
        size: 'small' | 'medium' | 'large';
        invalid: boolean;
        addonBefore: JSX.Element | string;
        addonAfter: JSX.Element | string;
        iconBefore: JSX.Element | string;
        iconAfter: JSX.Element | string;
        disabled?: boolean;
    }>;

const InternalTextBox: ForwardRefRenderFunction<HTMLInputElement, TextboxProps> = (
    { className, size = 'medium', invalid, iconAfter, iconBefore, addonAfter, addonBefore, disabled, ...props },
    ref
) => {
    return (
        <div
            className={classNames(styles.input, styles[size], {
                [styles.invalid]: invalid,
                [styles.disabled]: disabled
            })}
        >
            {addonBefore && <div className={classNames(styles.addonBefore, styles.addon)}>{addonBefore}</div>}
            {iconBefore && <div className={styles.iconBefore}>{iconBefore}</div>}
            <input type="text" ref={ref} {...props} disabled={disabled} />
            {iconAfter && <div className={styles.iconAfter}>{iconAfter}</div>}
            {addonAfter && <div className={classNames(styles.addonAfter, styles.addon)}>{addonAfter}</div>}
        </div>
    );
};

export const Textbox = forwardRef(InternalTextBox);

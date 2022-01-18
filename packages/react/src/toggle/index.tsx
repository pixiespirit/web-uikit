import classnames from 'classnames';
import React from 'react';
import styles from './styles/toggle.module.css';

type ToggleProps = {
    id?: string;
    checked?: boolean;
    style?: React.CSSProperties;
    disabled?: boolean;
    tabIndex?: number;
    children?: React.ReactNode;
    className?: string;
    size?: 'small' | 'large';
    name?: string;

    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChecked?: (checked: boolean) => void;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
};

const InternalToggle: React.ForwardRefRenderFunction<HTMLInputElement, ToggleProps> = (props, ref) => {
    const _height = props.size === 'large' ? 24 : 16;
    const _width = props.size === 'large' ? 42 : 28;
    const _side = props.size === 'large' ? 20 : 12;

    return (
        <label
            {...props.labelProps}
            className={classnames(styles.toggle, {
                [styles.checked]: props.checked,
                [styles.disabled]: props.disabled
            })}
        >
            <span
                style={{
                    ...props.style,
                    // @ts-ignore
                    '--toggle-height': `${_height}px`,
                    '--toggle-width': `${_width}px`,
                    '--toggle-size': `${_side}px`
                }}
                className={classnames(styles.wrapper, props.className)}
            ></span>
            <span className={styles.label}>{props.children}</span>
            <input
                {...props.inputProps}
                ref={ref}
                id={props.id}
                disabled={props.disabled}
                name={props.name}
                type="checkbox"
                checked={props.checked}
                onChange={(e) => {
                    props.onChecked?.(e.target.checked);
                    props.onChange?.(e);
                }}
            />
        </label>
    );
};

export const Toggle = React.forwardRef(InternalToggle);

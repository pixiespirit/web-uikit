import classNames from 'classnames';
import { forwardRef } from 'react';
import styles from './styles/checkbox.module.css';

export interface CheckboxProps {
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
}

const InternalCheckbox: React.ForwardRefRenderFunction<HTMLInputElement, CheckboxProps> = (props, ref) => {
    const _size = props.size === 'large' ? 20 : 16;

    return (
        <label
            {...props.labelProps}
            className={classNames(styles.checkbox, {
                [styles.disabled]: props.disabled,
                [styles.checked]: props.checked
            })}
        >
            <span
                tabIndex={props.tabIndex}
                className={classNames(props.className, styles.wrapper)}
                style={{
                    ...props.style,
                    //   @ts-ignore
                    '--checkbox-size': `${_size}px`
                }}
            >
                <span className={styles.iconWrapper}>
                    <CheckIcon />
                </span>
            </span>

            <span className={styles.label}>{props.children}</span>

            <input
                {...props.inputProps}
                ref={ref}
                id={props.id}
                name={props.name}
                type="checkbox"
                disabled={props.disabled}
                checked={props.checked}
                onChange={(e) => {
                    props.onChange?.(e);
                    props.onChecked?.(e.target.checked);
                }}
                hidden
            />
        </label>
    );
};

export const Checkbox = forwardRef(InternalCheckbox);

const CheckIcon: React.FC = () => {
    return (
        <svg
            className={styles.checkIcon}
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8.9375 1.375L3.6875 6.625L1.0625 4"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

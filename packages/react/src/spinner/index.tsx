import classNames from 'classnames';
import { FC } from 'react';
import styles from './styles/spinner.module.css';

type Props = {
    type?: 'light' | 'dark';
    size?: 'SMALL' | 'MEDIUM' | 'LARGE' | 'XLARGE';
};

const SIZES = {
    SMALL: styles.small,
    MEDIUM: styles.medium,
    LARGE: styles.large,
    XLARGE: styles.xlarge
};

const Spinner: FC<Props> = ({ type = 'dark', size = 'MEDIUM' }) => {
    return (
        <div
            className={classNames(
                SIZES[size] || SIZES.MEDIUM,
                styles.loader,
                type === 'light' ? styles.light : styles.dark
            )}
        />
    );
};

export default Spinner;

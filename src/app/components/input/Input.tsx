import { FC, InputHTMLAttributes } from 'react';
import styles from './styles.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Input: FC<InputProps> = ({ label, type, id, ...props }) => {
    return (
        <div className={styles.inputWrapper}>
            {label && (
                <label className={styles.label} htmlFor={id}>
                    {label}
                </label>
            )}
            <input type={type} id={id} className={styles.input} {...props} />
        </div>
    );
};

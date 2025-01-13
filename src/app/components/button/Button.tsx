import { ButtonHTMLAttributes, FC, JSX } from 'react';
import styles from './styles.module.scss';
import { ButtonStyleType } from './types';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    styleType?: ButtonStyleType;
    icon?: JSX.Element;
}

export const Button: FC<ButtonProps> = ({ children, styleType, icon, ...props }) => {
    return (
        <button className={`${styles.button} ${styles.button}--${styleType || ButtonStyleType.PRIMARY}`} {...props}>
            {icon ? (
                <div className={`${styles.button}__innerWrapper`}>
                    {icon}
                    {children}
                </div>
            ) : (
                children
            )}
        </button>
    );
};

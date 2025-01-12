import { ButtonHTMLAttributes, FC, JSX } from 'react';
import styles from './styles.module.scss';

export enum ButtonStyleType {
    PRIMARY = 'primary',
    OUTLINED = 'outlined',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    styleType?: ButtonStyleType;
    onClick?: () => void;
    icon?: JSX.Element;
}

export const Button: FC<ButtonProps> = ({ children, onClick, styleType, icon, ...props }) => {
    return (
        <button
            className={`${styles.button} ${styles.button}--${styleType || ButtonStyleType.PRIMARY}`}
            onClick={onClick}
            {...props}
        >
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

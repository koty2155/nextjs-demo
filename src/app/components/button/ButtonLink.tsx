import { FC, ReactNode } from 'react';
import styles from './styles.module.scss';
import Link, { LinkProps } from 'next/link';
import { ButtonStyleType } from './types';

interface ButtonLinkProps extends LinkProps {
    styleType?: ButtonStyleType;
    children: ReactNode;
}

export const ButtonLink: FC<ButtonLinkProps> = ({ children, styleType, ...props }) => {
    return (
        <Link className={`${styles.button} ${styles.button}--${styleType || ButtonStyleType.PRIMARY}`} {...props}>
            {children}
        </Link>
    );
};

import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';

export const Card: FC<PropsWithChildren> = ({ children }) => {
    return <div className={styles.card}>{children}</div>;
};

import { UrlObject } from 'url';
import { ButtonLink } from '../button/ButtonLink';
import { FC } from 'react';
import styles from './styles.module.scss';

interface BoxProps {
    title: string;
    description: string;
    link: string | UrlObject;
    linkTitle: string;
}

export const Box: FC<BoxProps> = ({ title, description, link, linkTitle }) => {
    return (
        <div className={styles.box}>
            <h1 className={styles['box__title']}>{title}</h1>
            <div className={styles['box__description']}>{description}</div>
            <div className={styles['box__link']}>
                <ButtonLink href={link}>{linkTitle}</ButtonLink>
            </div>
        </div>
    );
};

import styles from './styles.module.scss';
import { Divider } from '@/app/components/divider/Divider';

export const SocialButtonsDivider = () => (
    <div className={styles.socialButtonsDivider}>
        <Divider />
        <p>or</p>
        <Divider />
    </div>
);

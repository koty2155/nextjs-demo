'use client';

import styles from './page.module.scss';
import { Button } from '@/app/components/button/Button';
import { Input } from '@/app/components/input/Input';
import { SocialButtonsDivider } from './components/SocialButtonsDivider';
import { Facebook } from '@/app/components/icons/Facebook';
import { Google } from '@/app/components/icons/Google';
import { PasswordInput } from '@/app/components/input/password/PasswordInput';
import { ButtonStyleType } from '@/app/components/button/types';
import Link from 'next/link';

export default function SignIn() {
    return (
        <div className={styles.signinBox}>
            <div className={styles.signinBox__header}>
                <h1>Log in</h1>
                <p>
                    Don&apos;t you have an account? <Link href="/signup">Sign up</Link>
                </p>
            </div>

            <div className={styles.signinForm}>
                <Input type="email" id="email" label="Your email" required />
                <PasswordInput required />
                <Link href="/forgot">Forgot your password</Link>
                <Button type="submit">Log in</Button>
            </div>

            <SocialButtonsDivider />

            <div className={styles.socialButtonsWrapper}>
                <Button styleType={ButtonStyleType.OUTLINED} icon={<Facebook />}>
                    Log in with Facebook
                </Button>
                <Button styleType={ButtonStyleType.OUTLINED} icon={<Google />}>
                    Log in with Google
                </Button>
            </div>
        </div>
    );
}

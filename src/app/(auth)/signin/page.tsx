'use client';

import styles from './page.module.scss';
import { Button } from '@/app/components/control/Button';
import { Input } from '@/app/components/input/Input';
import { SocialButtonsDivider } from './components/SocialButtonsDivider';
import { Facebook } from '@/app/components/icons/Facebook';
import { Google } from '@/app/components/icons/Google';
import { PasswordInput } from '@/app/components/input/password/PasswordInput';
import { ControlStyleType } from '@/app/components/control/types';

export default function SignIn() {
    return (
        <div className={styles.signinBox}>
            <div className={styles.signinBox__header}>
                <h1>Log in</h1>
                <p>
                    Don&apos;t you have an account? <a href="/signup">Sign up</a>
                </p>
            </div>

            <div className={styles.signinForm}>
                <Input type="email" id="email" label="Your email" required />
                <PasswordInput required />
                <a href="/forgot">Forgot your password</a>
                <Button styleType={ControlStyleType.PRIMARY} type="submit">
                    Log in
                </Button>
            </div>

            <SocialButtonsDivider />

            <div className={styles.socialButtonsWrapper}>
                <Button styleType={ControlStyleType.OUTLINED} icon={<Facebook />}>
                    Log in with Facebook
                </Button>
                <Button styleType={ControlStyleType.OUTLINED} icon={<Google />}>
                    Log in with Google
                </Button>
            </div>
        </div>
    );
}

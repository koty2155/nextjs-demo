'use client';

import { useActionState } from 'react';
import { Card } from '@/app/components/card/Card';
import { Input } from '@/app/components/input/Input';
import { signup } from '@/app/actions/auth';
import { Button } from '@/app/components/button/Button';
import { FormState } from '@/app/validation/signup';
import styles from './page.module.scss';

export default function Signup() {
    const [state, action, isPending] = useActionState<FormState>(signup, undefined);

    return (
        <Card>
            <div>
                <h1>Register</h1>
            </div>

            <form className={styles.signupForm} action={action}>
                <Input
                    type="email"
                    name="email"
                    id="email"
                    label="Your email"
                    autoComplete="email"
                    defaultValue={state?.errors?.email}
                    error={state?.errors?.email}
                    required
                />
                <Input
                    type="password"
                    name="password"
                    id="password"
                    label="Your password"
                    autoComplete="new-password"
                    error={state?.errors?.password}
                    required
                />
                <Button type="submit" disabled={isPending}>
                    Register
                </Button>
            </form>
        </Card>
    );
}

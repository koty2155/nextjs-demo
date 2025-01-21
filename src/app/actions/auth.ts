'use server';

import { FormState, SignupFormSchema } from '../validation/signup';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { app } from '../../../firebase';

export async function signup(_state: FormState, formData: FormData) {
    const validatedFields = SignupFormSchema.safeParse({
        email: formData?.get('email'),
        password: formData?.get('password'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { email, password } = validatedFields.data;

    const { user } = await createUserWithEmailAndPassword(getAuth(app), email, password);

    if (!user) {
        return {
            message: 'An error occurred while creating your account.',
        };
    }

    sendEmailVerification(user);
}

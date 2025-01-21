import { z } from 'zod';

export const SignupFormSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    password: z.string().min(8, { message: 'Password must be at least 8 characters long' }).trim(),
});

export interface FormState {
    errors?: {
        email?: string;
        password?: string;
    };
    message?: string;
}

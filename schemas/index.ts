import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email({ message: 'Email is required' }),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: 'Email is required' }),
  name: z.string({ required_error: 'Name is required' }),
  password: z.string().min(6, {
    message: 'Minimum 6 chars required',
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({ message: 'Email is required' }),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(6, 'Minimum of 6 characters, required.'),
});

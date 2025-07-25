'use server';
import { AuthError } from 'next-auth';
import { signIn } from '../../auth';

export async function handleLogin(values: { userName: string; loginPin: number }) {
  try {
    await signIn('credentials', {
      userName: values.userName,
      loginPin: values.loginPin,
      redirect: true,
      redirectTo: '/'
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

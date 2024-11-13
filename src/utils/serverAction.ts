'use server';
import { signIn } from '@/auth';

export const credentialsSignIn = async (data: { token: string; service: string }) => {
  await signIn('credentials', {
    token: data.token,
    service: data.service,
    redirect: true,
    redirectTo: '/test',
  });
};

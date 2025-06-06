import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
 
export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  providers: [Credentials({})],
});
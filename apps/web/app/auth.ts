import NextAuth, { User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { authConfig } from './auth.config';

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      authorize: async (credentials, request) => {
        const parsedCredentials = z.object({ userName: z.string(), loginPin: z.string() }).safeParse(credentials);
        console.log('parsedCredentials', parsedCredentials.data);
        const response = await fetch('http://localhost:3001/auth/signIn', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-pomerium': request.headers ? (request.headers.get('x-pomerium') ? 'true' : 'false') : 'false'
          },
          body: JSON.stringify({
            userName: parsedCredentials.data?.userName,
            loginPin: Number(parsedCredentials.data?.loginPin)
          })
        });
        console.log('response', response);
        if (response.ok) {
          const user = await response.json();
          console.log(user);
          if (user) {
            console.log('authenticated');
            return { authenticated: user } as User; // Return the user object if authentication is successful
          } else {
            return null;
          }
        } else {
          return null;
        }
      }
    })
  ]
});

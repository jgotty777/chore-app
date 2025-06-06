import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      
        return isLoggedIn// Redirect unauthenticated users to login page
      
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
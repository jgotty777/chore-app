import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login'
  },
  callbacks: {
    // authorized({ auth, request: { nextUrl } }) {
    //   const isLoggedIn = !!auth?.user?.authenticated;
    //   console.log('auth', auth);
    //   console.log('isLoggedIn', isLoggedIn);
    //   if (isLoggedIn) return true;
    //   return NextResponse.redirect('/login'); // Redirect unauthenticated users to login page
    // },
    async jwt({ token, user }) {
      if (user) {
        // If a user object is present (meaning a successful login/signup),
        // attach the user data to the token.
        token.user = user;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token?.user) {
        // Note that this if condition is needed
        // @ts-expect-error need to type
        session.user = token.user;
      }
      return session;
    }
  },
  providers: [] // Add providers with an empty array for now
} satisfies NextAuthConfig;

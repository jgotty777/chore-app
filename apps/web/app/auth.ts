import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      authorize: async ({ userName, loginPin }, request) => {
        const response = await fetch("localhost:3001/auth/signIn", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 'x-pomerium': request.headers ? (request.headers.get('x-pomerium') ? 'true' : 'false') : 'false'
          },
          body: JSON.stringify({
            userName: userName,
            loginPin: loginPin,
          }),
        });

        if (response.ok) {
          const user = await response.json();
          if (user) {
            return user as User; // Return the user object if authentication is successful
          }
        }

        return null;
      },
    }),
  ],
});

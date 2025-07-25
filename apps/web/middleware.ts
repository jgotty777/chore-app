import { NextResponse } from 'next/server';
import { auth } from './app/auth';

export default auth(req => {
  console.log('Middleware running for:', req.nextUrl.pathname);
  const isloggedIn = !!req.auth?.user?.authenticated || false;
  console.log('isloggedIn:', isloggedIn);
  if (req.nextUrl.pathname.startsWith('/test') && !isloggedIn) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
});

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)', '/test']
};

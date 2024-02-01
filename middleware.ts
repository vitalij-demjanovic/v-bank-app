import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('token')?.value;
  if (currentUser) {
    return NextResponse.redirect(new URL('/home', request.url));
  }
  return NextResponse.redirect(new URL('/authentication', request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/'
};

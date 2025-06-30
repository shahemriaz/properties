import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

const roleDashboardMap: Record<string, string> = {
  buyer: '/dashboard/buyer',
  agent: '/dashboard/agent',
  builder: '/dashboard/builder',
  admin: '/dashboard/admin',
};

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Protect all /dashboard/* routes
  if (pathname.startsWith('/dashboard')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
    // Role-based dashboard protection
    const role = token.role;
    const expectedPath = roleDashboardMap[role];
    if (expectedPath && !pathname.startsWith(expectedPath)) {
      return NextResponse.redirect(new URL(expectedPath, req.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
}; 
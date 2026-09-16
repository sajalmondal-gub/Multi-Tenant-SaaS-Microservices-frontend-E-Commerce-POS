import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get("host") || "";

  // Example logic for multi-tenant routing
  // Rewrite based on hostname
  // return NextResponse.rewrite(new URL(`/tenant-frontend/${hostname}${url.pathname}`, request.url));
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

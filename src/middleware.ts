import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  
  // Get hostname of request (e.g. demo.localhost:3000, xyz.com, admin.xyz.localhost:3000)
  let hostname = req.headers.get('host') || 'localhost:3000';

  // Remove port for cleaner checking if needed, but we can also work with it
  const hostnameWithoutPort = hostname.split(':')[0];

  // Define our main platform domains (adjust for production)
  const isLocalhost = hostnameWithoutPort === 'localhost' || hostnameWithoutPort === '127.0.0.1';
  const isSuperAdminLocalhost = hostnameWithoutPort === 'admin.localhost';
  
  // If it's a direct IP or just localhost, we don't need to rewrite!
  // Next.js will automatically resolve to app/(platform)/(marketing)/page.tsx because of route groups.
  if (isLocalhost) {
    return NextResponse.next();
  }

  // If it's the Super Admin domain
  if (isSuperAdminLocalhost) {
    // Route group (platform) is ignored in the URL path.
    return NextResponse.rewrite(new URL(`/super-admin${url.pathname}${url.search}`, req.url));
  }

  // Handle Multi-Tenant Domains
  // Pattern 1: Tenant Admin (admin.domain.com or admin.domain.localhost)
  if (hostnameWithoutPort.startsWith('admin.')) {
    // Extract the actual domain by removing 'admin.' prefix
    const domain = hostnameWithoutPort.replace('admin.', '');
    const cleanDomain = domain.replace('.localhost', '');
    
    // Rewrite to /tenant-admin/[domain]
    return NextResponse.rewrite(new URL(`/tenant-admin/${cleanDomain}${url.pathname}${url.search}`, req.url));
  }

  // Pattern 2: Tenant Storefront (domain.com or domain.localhost)
  // Extract domain, removing .localhost if present for cleaner routing
  const cleanDomain = hostnameWithoutPort.replace('.localhost', '');
  
  // Rewrite to /tenant-frontend/[domain]
  return NextResponse.rewrite(new URL(`/tenant-frontend/${cleanDomain}${url.pathname}${url.search}`, req.url));
}

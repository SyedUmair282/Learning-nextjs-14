import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublic = path === '/dashboard/register' || path === "/dashboard/login";
  const isProtected = path === '/dashboard';

  let cookie_id = request.cookies.get('user_id')
  let cookie_name = request.cookies.get('user_name')
  if(isPublic && cookie_id && cookie_name){
    return NextResponse.redirect(new URL('/', request.url))
  }
  if(isProtected && !cookie_id && !cookie_name){
    return NextResponse.redirect(new URL('/', request.url))
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dashboard/register/:path*','/dashboard/login/:path*','/dashboard/:path*']
}
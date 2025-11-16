import { type NextRequest, NextResponse } from 'next/server';
import { createI18nMiddleware } from 'next-international/middleware';

const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'fr'],
  defaultLocale: 'fr',
  urlMappingStrategy: 'rewrite'
});

const publicPaths = ['/login'];

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Rediriger la route racine vers /dashboard
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Vérifier si le chemin est public (avec ou sans locale)
  // Avec urlMappingStrategy: 'rewrite', les URLs peuvent être /login ou /fr/login
  const isPublicPath = publicPaths.some((path) => {
    // Vérifier le chemin direct
    if (pathname.startsWith(path)) {
      return true;
    }
    // Vérifier le chemin avec locale (ex: /fr/login)
    return pathname.match(new RegExp(`^/(en|fr)${path.replace(/^\//, '/')}`));
  });

  if (isPublicPath) {
    return I18nMiddleware(request);
  }

  // const host = request.headers.get('host');
  // const protocol = request.headers.get('x-forwarded-proto') || 'http';

  // const { data: session } = await betterFetch<Session>(
  //   '/api/auth/get-session',
  //   {
  //     baseURL: `${protocol}://${host}`,
  //     headers: {
  //       cookie: request.headers.get('cookie') || ''
  //     }
  //   }
  // );

  // if (!session) {
  //   return NextResponse.redirect(
  //     `${protocol}://${host}/login?callbackUrl=${encodeURIComponent(
  //       request.nextUrl.pathname
  //     )}`
  //   );
  // }

  return I18nMiddleware(request);
}

export const config = {
  matcher: [
    '/((?!_next/static|api|_next/image|favicon.ico|fonts|.*\\.(?:svg|png|jpg|jpeg|gif|webp|otf|ttf|woff|woff2)$).*)'
  ]
};

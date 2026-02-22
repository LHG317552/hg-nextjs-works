import { next } from '@vercel/edge';
import { geolocation } from '@vercel/functions';

export const config = {
  matcher: '/', // 보호할 경로 설정
};

export default function middleware(request: Request) {
  const { country } = geolocation(request);

  // 허용할 국가 코드 (예: 한국 'KR')
  const ALLOWED_COUNTRY = ['KR'];
  const currentCountry = country || 'KR'; 

  if (!ALLOWED_COUNTRY.includes(currentCountry)) {
    return new Response('Access Denied', { status: 403 });
  }

  return next();
}
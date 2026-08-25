const BOT_UA = /facebookexternalhit|Twitterbot|LinkedInBot|Slackbot|Discordbot|WhatsApp|TelegramBot|Googlebot|bingbot|opengraph/i;

const PAGE_META = {
  '/': {
    title: 'CMMC 2.0 & NIST Compliance Consulting | Spartan Cyber Security',
    description: 'CMMC 2.0 and NIST 800-171 compliance consulting for federal contractors.',
    image: 'https://spartan-cs.com/assets/logo-DH4HSouC.png',
  },
  '/compliance-systems': {
    title: 'Compliance Systems | Spartan Cyber Security',
    description: 'Build audit-ready compliance systems mapped to CMMC 2.0 and NIST 800-171 controls.',
    image: 'https://spartan-cs.com/assets/logo-DH4HSouC.png',
  },
  '/about': {
    title: 'About Us | Spartan Cyber Security',
    description: 'Executive advisory firm led by Brigadier General (Ret.) Raphael Warren.',
    image: 'https://spartan-cs.com/assets/logo-DH4HSouC.png',
  },
  // add the rest of your routes the same way
};

export const config = {
  matcher: '/((?!api|assets|.*\\..*).*)',
};

export default async function middleware(request) {
  const ua = request.headers.get('user-agent') || '';

  // Real visitors → do nothing, normal SPA loads as usual
  if (!BOT_UA.test(ua)) return;

  const url = new URL(request.url);
  const meta = PAGE_META[url.pathname] || PAGE_META['/'];

  // Fetch the STATIC template file (never the SPA itself, so no loop risk)
  const templateRes = await fetch(new URL('/meta-template.html', request.url));
  let html = await templateRes.text();

  html = html
    .replaceAll('__TITLE__', meta.title)
    .replaceAll('__DESCRIPTION__', meta.description)
    .replaceAll('__IMAGE__', meta.image)
    .replaceAll('__URL__', url.href);

  return new Response(html, {
    headers: { 'content-type': 'text/html; charset=utf-8' },
  });
}
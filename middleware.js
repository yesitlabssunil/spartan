// const BOT_UA = /facebookexternalhit|Twitterbot|LinkedInBot|Slackbot|Discordbot|WhatsApp|TelegramBot|Googlebot|bingbot|opengraph/i;
const BOT_UA = /facebookexternalhit|Twitterbot|LinkedInBot|Slackbot|Discordbot|WhatsApp|TelegramBot|Googlebot|bingbot|opengraph|SkypeUriPreview|MicrosoftPreview|Teams/i;

const PAGE_META = {
    "/": {
      title: "CMMC 2.0 & NIST Compliance Consulting | Spartan Cyber Security",
      description:
        "CMMC compliance consultant helping defense contractors achieve CMMC 2.0 and NIST 800-171 certification with audit-ready, evidence-driven security programs.",
      image: "https://spartan-cs.com/assets/logo-DH4HSouC.png",
    },
  
    "/about": {
      title: "About Us | Spartan Cyber Security",
      description:
        "Learn about Spartan Cyber Security and our approach to CMMC 2.0, NIST 800-171 compliance, and cybersecurity for federal contractors.",
      image: "https://spartan-cs.com/assets/logo-DH4HSouC.png",
    },
  
    "/cmmc": {
      title: "CMMC 2.0 Compliance & Certification Readiness | Spartan Cyber Security",
      description:
        "CMMC 2.0 readiness assessments, gap analysis, and audit-ready documentation to help defense contractors achieve certification and protect DoD contracts.",
      image: "https://spartan-cs.com/assets/logo-DH4HSouC.png",
    },
  
    "/compliance-systems": {
      title: "Cybersecurity Compliance Services for Defense Contractors | Spartan Cyber Security",
      description:
        "Cybersecurity compliance services for defense contractors — governance, risk assessments, and continuous compliance support built for CMMC and NIST 800-171.",
      image: "https://spartan-cs.com/assets/logo-DH4HSouC.png",
    },
  
    "/approach": {
      title: "Cybersecurity Compliance Approach | Spartan Cyber Security",
      description:
        "Cybersecurity compliance approach built on governance-first principles, turning CMMC and NIST 800-171 requirements into audit-ready operational security.",
      image: "https://spartan-cs.com/assets/logo-DH4HSouC.png",
    },
  
    "/industries": {
      title: "CMMC 2.0 Compliance by Industry | Spartan Cyber Security",
      description:
        "CMMC 2.0 compliance by industry — sector-specific guidance for manufacturing, aerospace, and defense supply chain contractors pursuing certification.",
      image: "https://spartan-cs.com/assets/logo-DH4HSouC.png",
    },
  
    "/microsoft-365-security": {
      title: "Microsoft 365 Compliance for Defense Contractors | Spartan Cyber Security",
      description:
        "Microsoft 365 compliance for defense contractors, with GCC High configuration, access controls, and monitoring built to meet CMMC and NIST 800-171.",
      image: "https://spartan-cs.com/assets/logo-DH4HSouC.png",
    },
  
    "/resources": {
      title: "CMMC 2.0 Compliance Resources | Spartan Cyber Security",
      description:
        "CMMC 2.0 compliance resources, including NIST 800-171 policy guides, audit readiness playbooks, and governance frameworks for defense contractors.",
      image: "https://spartan-cs.com/assets/logo-DH4HSouC.png",
    },
  
    "/contact-us": {
      title: "Contact Us | Spartan Cyber Security",
      description:
        "Contact Spartan Cyber Security for CMMC 2.0, NIST 800-171 compliance, and cybersecurity consulting.",
      image: "https://spartan-cs.com/assets/logo-DH4HSouC.png",
    },
  
    "/blogs": {
      title: "Cybersecurity Blogs | Spartan Cyber Security",
      description:
        "Read the latest insights about CMMC 2.0, NIST 800-171, cybersecurity, and compliance.",
      image: "https://spartan-cs.com/assets/logo-DH4HSouC.png",
    },
  };

export const config = {
  matcher: '/((?!api|assets|.*\\..*).*)',
};

export default async function middleware(request) {
  const ua = request.headers.get('user-agent') || '';

  // Real visitors → do nothing, normal SPA loads as usual
  if (!BOT_UA.test(ua)) return;

  const url = new URL(request.url);
//   const meta = PAGE_META[url.pathname] || PAGE_META['/'];



  

  const getBlogMeta = async (slug) => {
    try {
      const response = await fetch(
        `https://spartanapi.yilstaging.com/api/blogs/${encodeURIComponent(slug)}`
      );
  
      if (!response.ok) {
        return PAGE_META["/"];
      }
  
      const data = await response.json();
    //   console.log("BLOG API RESPONSE:", JSON.stringify(data, null, 2));
  
      return {
        title: data?.data?.title,
        description: data?.data?.sub_title,
        image: "https://spartan-cs.com/assets/logo-DH4HSouC.png",
      };
    } catch (error) {
      console.error("Blog SEO fetch failed:", error);
  
      return PAGE_META["/"];
    }
  };

  const getResourceMeta = async (slug) => {
    try {
      const response = await fetch(
        `https://spartanapi.yilstaging.com/api/resource-details/${encodeURIComponent(slug)}`
      );
  
      if (!response.ok) {
        return PAGE_META["/"];
      }
  
      const data = await response.json();
    //   console.log("RESOURCE API RESPONSE:", JSON.stringify(data, null, 2));
  
      return {
        title: data?.data?.heroSection.mainTitle,
        description: "CMMC 2.0 and NIST 800-171 compliance resources from Spartan Cyber Security.",
        image: "https://spartan-cs.com/assets/logo-DH4HSouC.png",
      };
    } catch (error) {
      console.error("Resource SEO fetch failed:", error);
  
      return PAGE_META["/"];
    }
  };

  const getPageMeta = async (pathname) => {
    // Static pages
    if (PAGE_META[pathname]) {
      return PAGE_META[pathname];
    }
  
    // Blog dynamic page
    if (pathname.startsWith("/blog/")) {
      const slug = pathname.replace("/blog/", "");
  
      return await getBlogMeta(slug);
    }
  
    // Resource dynamic page
    if (pathname.startsWith("/resource/")) {
      const slug = pathname.replace("/resource/", "");
  
      return await getResourceMeta(slug);
    }
  
    // Fallback
    return PAGE_META["/"];
  };

  const meta = await getPageMeta(url.pathname);

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
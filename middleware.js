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

function injectMeta(html, meta, currentUrl) {
  const title = meta?.title || PAGE_META["/"].title;
  const description = meta?.description || PAGE_META["/"].description;
  const image = meta?.image || PAGE_META["/"].image;
  const url = currentUrl || "https://spartan-cs.com/";

  // Replace or insert <title>
  if (/<title>[\s\S]*?<\/title>/i.test(html)) {
    html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
  } else {
    html = html.replace('</head>', `  <title>${title}</title>\n</head>`);
  }

  // Helper function to update or append <meta> tags
  const setMeta = (attrName, attrValue, contentValue) => {
    const regex1 = new RegExp(`<meta\\s+${attrName}=["']${attrValue}["']\\s+content=["'][^"']*["']\\s*\\/?>`, 'gi');
    const regex2 = new RegExp(`<meta\\s+content=["'][^"']*["']\\s+${attrName}=["']${attrValue}["']\\s*\\/?>`, 'gi');
    const newTag = `<meta ${attrName}="${attrValue}" content="${contentValue}" />`;

    if (regex1.test(html)) {
      html = html.replace(regex1, newTag);
    } else if (regex2.test(html)) {
      html = html.replace(regex2, newTag);
    } else {
      html = html.replace('</head>', `  ${newTag}\n</head>`);
    }
  };

  // Helper function to set canonical link
  const setCanonical = (hrefValue) => {
    const regex = /<link\s+rel=["']canonical["']\s+href=["'][^"']*["']\s*\/?>/gi;
    const newTag = `<link rel="canonical" href="${hrefValue}" />`;
    if (regex.test(html)) {
      html = html.replace(regex, newTag);
    } else {
      html = html.replace('</head>', `  ${newTag}\n</head>`);
    }
  };

  setMeta('name', 'description', description);
  setMeta('property', 'og:type', 'website');
  setMeta('property', 'og:site_name', 'Spartan Cyber Security');
  setMeta('property', 'og:title', title);
  setMeta('property', 'og:description', description);
  setMeta('property', 'og:image', image);
  setMeta('property', 'og:url', url);

  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', title);
  setMeta('name', 'twitter:description', description);
  setMeta('name', 'twitter:image', image);

  setCanonical(url);

  return html;
}

export default async function middleware(request) {
  const url = new URL(request.url);

  const getBlogMeta = async (slug) => {
    try {
      const response = await fetch(
        `https://spartanapi.yilstaging.com/api/blogs/${encodeURIComponent(slug)}`
      );

      if (!response.ok) {
        return PAGE_META["/blogs"] || PAGE_META["/"];
      }

      const data = await response.json();
      const blog = data?.data;

      return {
        title: blog?.title ? `${blog.title} | Spartan Cyber Security` : PAGE_META["/blogs"].title,
        description: blog?.sub_title || PAGE_META["/blogs"].description,
        image: blog?.currentArticle?.image || blog?.image || PAGE_META["/"].image,
      };
    } catch (error) {
      console.error("Blog SEO fetch failed:", error);
      return PAGE_META["/blogs"] || PAGE_META["/"];
    }
  };

  const getResourceMeta = async (slug) => {
    try {
      const response = await fetch(
        `https://spartanapi.yilstaging.com/api/resource-details/${encodeURIComponent(slug)}`
      );

      if (!response.ok) {
        return PAGE_META["/resources"] || PAGE_META["/"];
      }

      const data = await response.json();
      const resource = data?.data;

      return {
        title: resource?.heroSection?.mainTitle ? `${resource.heroSection.mainTitle} | Spartan Cyber Security` : PAGE_META["/resources"].title,
        description: resource?.heroSection?.subTitle || PAGE_META["/resources"].description,
        image: resource?.heroSection?.image || PAGE_META["/"].image,
      };
    } catch (error) {
      console.error("Resource SEO fetch failed:", error);
      return PAGE_META["/resources"] || PAGE_META["/"];
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

  // Fetch the compiled production index.html
  // Because /index.html has a file extension (.html), it bypasses middleware matcher and fetches Vite's production index.html
  const templateRes = await fetch(new URL('/index.html', request.url));
  let html = await templateRes.text();

  html = injectMeta(html, meta, url.href);

  return new Response(html, {
    headers: { 'content-type': 'text/html; charset=utf-8' },
  });
}
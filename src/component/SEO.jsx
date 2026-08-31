import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  url = "https://spartan-cs.com/",
  image = "https://spartan-cs.com/assets/logo-DH4HSouC.png",
  schema = null,
}) => {

  const organizationSchema = {
    "@type": "Organization",
    "@id": "https://spartan-cs.com/#organization",
    "name": "Spartan Cyber Security",
    "url": "https://spartan-cs.com/",
    "logo": "https://spartan-cs.com/assets/logo-DH4HSouC.png",
    "description":
      "Executive advisory firm specializing in CMMC 2.0, NIST 800-171 compliance, and cybersecurity for federal contractors.",
    "founder": {
      "@type": "Person",
      "name": "Raphael Warren",
      "jobTitle": "Founder & CEO",
      "honorificPrefix": "Brigadier General (Ret.)"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-505-639-3883",
      "contactType": "customer service",
      "email": "rwarren@spartan-cs.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Albuquerque",
      "addressRegion": "NM",
      "postalCode": "87113",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.linkedin.com/company/spartan-cyber-security",
      "https://twitter.com/spartan_cs"
    ]
  };


  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={url} />

      {/* <!-- Open Graph --> */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Spartan Cyber Security" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en_US" />

      {/* <!-- Twitter --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta
        name="twitter:image:alt"
        content={title}
      />
      <meta name="twitter:site" content="@spartan_handle" />

      {/* Global Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            organizationSchema,
            ...(schema
              ? Array.isArray(schema)
                ? schema
                : [schema]
              : [])
          ]
        })}
      </script>


    </Helmet>
  );
};

export default SEO;

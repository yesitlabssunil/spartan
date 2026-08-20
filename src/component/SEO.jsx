import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ 
  title, 
  description,
  url = "https://spartan-cs.com/",
  image = "https://spartan-cs.com/og-image.jpg",
 }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={url} />

      {/* <!-- Open Graph --> */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Spartan Cyber Security" />
      <meta property="og:title" content="CMMC 2.0 & NIST Compliance Consulting | Spartan Cyber Security" />
      <meta property="og:description" content="CMMC 2.0 and NIST 800-171 compliance consulting for federal contractors. Audit-ready cybersecurity programs built for C3PAO assessment and contract defense." />
      <meta property="og:url" content="https://spartan-cs.com/" />
      <meta property="og:image" content="https://spartan-cs.com/og-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Spartan Cyber Security — CMMC 2.0 & NIST 800-171 Compliance Consulting" />
      <meta property="og:locale" content="en_US" />

      {/* <!-- Twitter --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="CMMC 2.0 & NIST Compliance Consulting | Spartan Cyber Security" />
      <meta name="twitter:description" content="CMMC 2.0 and NIST 800-171 compliance consulting for federal contractors. Audit-ready cybersecurity programs built for C3PAO assessment and contract defense." />
      <meta name="twitter:image" content="https://spartan-cs.com/og-image.jpg" />
      <meta name="twitter:site" content="@spartan_handle" />


    </Helmet>
  );
};

export default SEO;

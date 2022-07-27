import NextHead from 'next/head';

import Schema from '../Schema';
import defaultSchema from '../Schema/defaultSchema';

const Head = ({ yoastSeo, seo, schema }) => {
  const yoastSchema = yoastSeo?.schema;
  const schemaRaw = yoastSchema?.raw;
  const finalSchema = schema || yoastSchema || defaultSchema;
  const finalTitle = yoastSeo?.title || seo?.title || 'Monaco Solicitors';
  const finalDescription =
    seo?.description ||
    yoastSeo?.metaDesc ||
    'We specialise in negotiating fair settlement agreement exit packages for employees when they have been treated badly at work. Also employment tribunals.';
  const isProduction = process.env.NODE_ENV === 'production';
  const finalRobots = isProduction ? 'index, follow' : 'noindex, nofollow';

  return (
    <>
      <NextHead>
        <title>{finalTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={finalDescription} />
        <meta name="title" content={finalTitle} />
        <meta name="robots" content={finalRobots} />

        {/* Open graph */}
        <meta property="og:description" content={finalDescription} />
        <meta property="fb:app_id" content="Monaco Solicitors" />
        {/* twitter cards */}

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content={finalTitle} />
        <meta property="twitter:description" content={finalDescription} />
        <meta property="twitter:image" content="#" />
        <meta property="twitter:url" content="#" />
        <meta name="google-site-verification" content="YUP68krJ9mPC9oANdae0FWcTcV3bTxffGDeG7TNUGR4" />

        {/* Schema.org */}
        {/* Analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T5XNDHQ')`,
        }}
        ></script>

        {/* favicons */}
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-icon-192x192.png"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/manifest.json" />
        <script
          dangerouslySetInnerHTML={{
              __html: `
            window.GUMLET_CONFIG = {
              hosts: [{
                  current: "monacosolicitors.co.uk",
                  gumlet: "monacosolicitors.gumlet.io"
              }],
              lazy_load: true,
              srcset: true,
              auto_webp: true
            };
            (function(){d=document;s=d.createElement("script");s.src="https://cdn.jsdelivr.net/npm/gumlet.js@2.1/dist/gumlet.min.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`,
          }}
        ></script>
        {/* Fonts */}
      </NextHead>
      {finalSchema && <Schema schema={finalSchema} schemaRaw={schemaRaw} />}
    </>
  );
};

export default Head;

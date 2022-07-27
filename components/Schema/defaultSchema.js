const defaultSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.monacosolicitors.co.uk/#organization',
      name: 'Monaco Solicitors',
      url: 'https://www.monacosolicitors.co.uk/',
      sameAs: [
        'https://www.facebook.com/MonacoSolicitors/',
        'https://www.linkedin.com/company/10169024/',
        'https://www.youtube.com/user/CompromiseAgreements',
        'https://twitter.com/monacosolicitor',
      ],
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://www.monacosolicitors.co.uk/#logo',
        url: 'https://www.monacosolicitors.co.uk/app/uploads/2019/07/monaco-solicitors-logo.png',
        width: 93,
        height: 28,
        caption: 'Monaco Solicitors',
      },
      image: { '@id': 'https://www.monacosolicitors.co.uk/#logo' },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.monacosolicitors.co.uk/#website',
      url: 'https://www.monacosolicitors.co.uk/',
      name: 'Monaco Solicitors',
      publisher: { '@id': 'https://www.monacosolicitors.co.uk/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://www.monacosolicitors.co.uk/?s={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://www.monacosolicitors.co.uk/#webpage',
      url: 'https://www.monacosolicitors.co.uk/',
      inLanguage: 'en-US',
      name: 'Employment Law Solicitors London &amp; Nationwide | Monaco Solicitors',
      isPartOf: { '@id': 'https://www.monacosolicitors.co.uk/#website' },
      about: { '@id': 'https://www.monacosolicitors.co.uk/#organization' },
      datePublished: '2019-07-01T11:06:07+00:00',
      dateModified: '2022-03-16T12:18:55+00:00',
      description:
        'We specialise in negotiating fair settlement agreement exit packages for employees when they have been treated badly at work. Also employment tribunals.',
    },
  ],
};

export default defaultSchema;

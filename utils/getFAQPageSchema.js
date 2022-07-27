const getFAQPageSchema = (faqs) => {
  const faqsSchemas = faqs.map(({ title, content }) => [
    {
      '@type': 'Question',
      name: title,
      acceptedAnswer: {
        '@type': 'Answer',
        text: content.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, ''),
      },
    },
  ]);

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqsSchemas,
  };
};

export default getFAQPageSchema;

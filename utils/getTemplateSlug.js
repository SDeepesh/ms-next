const getTemplateSlug = (template) => {
  const { slug, terms } = template;
  const termsSlug = terms?.nodes[0]?.slug;

  if (termsSlug) {
    return [termsSlug, 'templates', slug];
  }

  return ['templates', slug];
};

export default getTemplateSlug;

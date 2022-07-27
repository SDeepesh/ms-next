const getPageSlug = (page) => {
  const { slug, parent } = page;

  if (parent) {
    return [parent.node.slug, slug];
  }

  return [slug];
};

export default getPageSlug;

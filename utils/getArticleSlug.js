import postTypes from './postTypes';

const getArticleSlug = (article) => {
  const { slug, siteTopics } = article;
  const siteTopicSlug = siteTopics?.nodes[0]?.slug;

  if (siteTopicSlug) {
    return [siteTopicSlug, slug];
  }

  return [postTypes.ARTICLE, slug];
};

export default getArticleSlug;

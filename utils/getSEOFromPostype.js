import postTypes from './postTypes';

const getSEOFromPostype = (postType, postData) => {
  const isPage = postType === postTypes.PAGE;
  const isTemplate = postType === postTypes.TEMPLATE;
  const isArticle = postType === postTypes.ARTICLE;

  switch (true) {
    case isPage:
      return postData.pageBy.seo;
    case isTemplate:
      return postData.templateBy.seo;

    case isArticle:
      return postData.articleBy.seo;
    default:
      return null;
  }
};

export default getSEOFromPostype;

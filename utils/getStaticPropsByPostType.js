import getArticleBySlug from '../api/queries/articles/getArticleBySlug';
import getPageBySlug from '../api/queries/pages/getPageBySlug';
import getTemplateBySlug from '../api/queries/template/getTemplateBySlug';
import postTypes from './postTypes';

const getStaticPropsByPostType = (postType = 'page') => {
  switch (postType) {
    case postTypes.ARTICLE:
      return getArticleBySlug;
    case postTypes.TEMPLATE:
      return getTemplateBySlug;

    default:
      return getPageBySlug;
  }
};

export default getStaticPropsByPostType;

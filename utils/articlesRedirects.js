import createApolloClient from '../api';
import queryAllItems from '../api/utils/queryAllItems';
import getAllArticles from '../api/queries/articles/getAllArticles';

const client = createApolloClient();

const articlesRedirect = async () => {
  const articles = await queryAllItems(client.query, getAllArticles);

  const arrayOfRedirects = [];

  for (const article of articles) {
    console.log({ article });
    const hasSiteTopic = article?.siteTopics?.nodes[0]?.slug;
    const destination = hasSiteTopic
      ? `/${hasSiteTopic}/${article.slug}`
      : `/article/${article.slug}`;

    const redirectObject = {
      source: `/article/${article.slug}`,
      destination,
      permanent: true,
    };

    arrayOfRedirects.push(redirectObject);
  }

  console.log(arrayOfRedirects);
};

export default articlesRedirect;

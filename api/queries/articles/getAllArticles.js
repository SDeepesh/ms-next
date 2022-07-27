import { gql } from '@apollo/client';

const getAllArticles = (endCursor = '') => ({
  query: gql`
    {
      articles(first: 100, after: "${endCursor}", where : { status: PUBLISH }) {
        nodes {
          slug
          siteTopics {
            nodes {
              slug
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `,
});

export default getAllArticles;

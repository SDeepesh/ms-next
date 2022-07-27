import { gql } from '@apollo/client';

const getAllPages = (endCursor = '') => ({
  query: gql`
    {
      pages(first: 100, after: "${endCursor}", where : { status: PUBLISH }) {
        nodes {
          pageId
          slug
          template {
            templateName
          }
          parent {
            node {
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

export default getAllPages;

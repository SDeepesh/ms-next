import { gql } from '@apollo/client';

const getAllTemplates = (endCursor = '') => ({
  query: gql`
    {
      templates(first: 100, after: "${endCursor}", where : { status: PUBLISH }) {
        nodes {
          slug
          terms(first: 100) {
            nodes {
              slug
              name
            }
          }
          templateTopics {
            nodes {
              name
              description
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

export default getAllTemplates;

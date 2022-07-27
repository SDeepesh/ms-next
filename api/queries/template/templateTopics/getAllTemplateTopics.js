import { gql } from '@apollo/client';

const getAllTemplateTopics = () => ({
  query: gql`
    {
      templateTopics(first: 100) {
        nodes {
          name
          slug
          description
          templates(first: 100) {
            nodes {
              slug
              title
              content
            }
          }
        }
      }
    }
  `,
});

export default getAllTemplateTopics;

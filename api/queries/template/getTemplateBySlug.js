import { gql } from '@apollo/client';

const getTemplateBySlug = (slug) => ({
  query: gql`
    query Template($slug: String) {
      templateBy(uri: $slug) {
        title
        content
        templates {
          fieldGroupName
          letter
          file {
            mediaItemUrl
          }
        }
      }
    }
  `,
  variables: {
    slug,
  },
});

export default getTemplateBySlug;

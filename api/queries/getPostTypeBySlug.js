import { gql } from '@apollo/client';

const getPostTypeBySlug = (slug) => ({
  query: gql`
    query GetPostTypeBySlug($slug: String) {
      getPostTypeBySlug(slug: $slug)
    }
  `,
  variables: {
    slug,
  },
});

export default getPostTypeBySlug;

import { gql } from '@apollo/client';

const getMenu = (id, endCursor = '') => ({
  query: gql`
    query Menu($id: ID!) {
      menu(id: $id, idType: ID) {
        id
        name
        menuItems(first: 100, after: "${endCursor}") {
          nodes {
            id
            label
            path
            childItems(first: 100) {
              nodes {
                id
                label
                id
                path
              }
            }
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    }
  `,
  variables: {
    id,
  },
});

export default getMenu;

import { gql } from '@apollo/client';

const getAllTopPages = () => ({
  query: gql`
    {
      acfOptionsTopPages {
        topPages {
          topPages {
            text
            url
            image {
              sourceUrl(size: THUMBNAIL)
            }
          }
        }
      }
    }
  `,
});

export default getAllTopPages;

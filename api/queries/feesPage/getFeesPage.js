import { gql } from '@apollo/client';

const getFeesPage = () => ({
  query: gql`
    {
      acfOptionsFeesPage {
        feesPage {
          bannerHeading
          bannerDescription
          bannerImage {
            sourceUrl
          }
          worksSection {
            heading
            topDescription
            feesCards {
              heading
              description
              image {
                sourceUrl
              }
            }
            bottomDescription
          }
          communicateSection {
            heading
            process {
              heading
              description
              image {
                sourceUrl
              }
            }
            bottomDescription
          }
        }
      }
    }
  `,
});

export default getFeesPage;

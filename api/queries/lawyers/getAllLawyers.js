import { gql } from '@apollo/client';

const getAllLawyers = () => ({
  query: gql`
    {
      lawyers(first: 100, where: { status: PUBLISH }) {
        nodes {
          lawyers {
            jobTitle
          }
          title
          link
          slug
          sections {
            sections {
              ... on Team_Sections_Sections_Quote {
                fieldGroupName
                quote
              }
              ... on Team_Sections_Sections_Image {
                fieldGroupName
                image {
                  mediaItemUrl
                }
              }
            }
          }
        }
      }
    }
  `,
});

export default getAllLawyers;

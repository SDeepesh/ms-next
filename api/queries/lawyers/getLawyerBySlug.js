import { gql } from '@apollo/client';

const getLawyerBySlug = (slug) => ({
  query: gql`
    query Team($slug: String) {
      teamBy(uri: $slug) {
        slug
        title
        lawyers {
          fieldGroupName
          email
          jobTitle
          regulatedLink
          reviews {
            review {
              stars
              name
              platform
              platformLink
              mainQuote
              fieldGroupName
              text
            }
          }
        }
        sections {
          sections {
            ... on Team_Sections_Sections_Video {
              fieldGroupName
              videoId
            }
            ... on Team_Sections_Sections_Text {
              content
              dropcapLetter
              fieldGroupName
            }
            ... on Team_Sections_Sections_TextDark {
              content
              fieldGroupName
            }
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
  `,
  variables: {
    slug,
  },
});

export default getLawyerBySlug;

import { gql } from '@apollo/client';

const getArticleBySlug = (slug) => ({
  query: gql`
    query Article($slug: String) {
      articleBy(uri: $slug) {
        id
        title
        slug
        seo {
          title
          metaDesc
          schema {
            raw
          }
        }
        caseTypes {
          mainCasesLinks {
            fieldGroupName
            mainCasesLink
            mainCasesUrl {
              target
              title
              url
            }
          }
          fieldGroupName
          specificCasesLinks {
            fieldGroupName
            specificCasesLink
            specificCasesUrl {
              target
              title
              url
            }
          }
        }
        template {
          templateName
        }
        sections {
          sections {
            ... on Article_Sections_Sections_Video {
              fieldGroupName
              videoId
            }
            ... on Article_Sections_Sections_Text {
              fieldGroupName
              content
              dropcapLetter
            }
            ... on Article_Sections_Sections_TopThreeTips {
              fieldGroupName
              tips {
                tip {
                  tipText
                }
              }
            }
            ... on Article_Sections_Sections_Image {
              fieldGroupName
              image {
                sourceUrl(size: LARGE)
              }
            }
            ... on Article_Sections_Sections_CallToActionFullwidth {
              fieldGroupName
              ctaText
              ctaUrl
              mainText
            }
            ... on Article_Sections_Sections_HelpfulGuides {
              fieldGroupName
              guides {
                guide {
                  ... on Article {
                    link
                  }
                  ... on Template {
                    link
                  }
                  ... on Page {
                    link
                  }
                }
                linkText
              }
            }
          }
        }
        siteTopics {
          nodes {
            slug
          }
        }
      }
    }
  `,
  variables: {
    slug,
  },
});

export default getArticleBySlug;

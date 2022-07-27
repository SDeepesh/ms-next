import { gql } from '@apollo/client';

const getPageBySlug = (slug) => ({
  query: gql`
    query Page($slug: String) {
      pageBy(uri: $slug) {
        pageId
        id
        title
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
        sections {
          sections {
            ... on Page_Sections_Sections_Text {
              content
              dropcapLetter
              fieldGroupName
            }
            ... on Page_Sections_Sections_TextDark {
              content
              fieldGroupName
            }
            ... on Page_Sections_Sections_Quote {
              fieldGroupName
              quote
            }
            ... on Page_Sections_Sections_Image {
              fieldGroupName
              image {
                mediaItemUrl
              }
            }
            ... on Page_Sections_Sections_Video {
              fieldGroupName
              videoId
            }
            ... on Page_Sections_Sections_TopThreeTips {
              fieldGroupName
              tips {
                tip {
                  tipText
                }
              }
            }
            ... on Page_Sections_Sections_Calculator {
              fieldGroupName
            }
            ... on Page_Sections_Sections_HelpfulGuides {
              fieldGroupName
              guides {
                fieldGroupName
                linkText
                guide {
                  ... on Article {
                    slug
                    contentTypeName
                    siteTopics {
                      nodes {
                        slug
                      }
                    }
                  }
                  ... on Page {
                    slug
                    contentTypeName
                  }
                  ... on Template {
                    slug
                    contentTypeName
                    templateTopics {
                      nodes {
                        slug
                      }
                    }
                  }
                }
              }
            }
            ... on Page_Sections_Sections_Cdf {
              fieldGroupName
              hasForm
            }
            ... on Page_Sections_Sections_Reviewsio {
              fieldGroupName
            }
            ... on Page_Sections_Sections_CallToActionFullwidth {
              ctaText
              ctaUrl
              mainText
              fieldGroupName
            }
            ... on Page_Sections_Sections_QuestionsSchema {
              fieldGroupName
              questionsAnswers {
                answer
                fieldGroupName
                question
              }
            }
          }
        }
        template {
          templateName
        }
      }
    }
  `,
  variables: {
    slug,
  },
});

export default getPageBySlug;

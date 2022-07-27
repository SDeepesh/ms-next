import { gql } from '@apollo/client';

const getAllFaqs = () => ({
  query: gql`
    {
      faqs(first: 100, where: { status: PUBLISH }) {
        nodes {
          title
          content
        }
      }
    }
  `,
});

export default getAllFaqs;

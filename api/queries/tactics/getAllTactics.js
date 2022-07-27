import { gql } from '@apollo/client';

const getAllTactics = () => ({
  query: gql`
    {
      tactics(first: 100, where: { status: PUBLISH }) {
        nodes {
          title
          tactics {
            tacticsAnswers {
              tacticsAnswerTitle
              tacticsAnswerDescription
            }
          }
        }
      }
    }
  `,
});

export default getAllTactics;

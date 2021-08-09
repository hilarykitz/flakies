import gql from 'graphql-tag';

export const GET_QUIZ_BY_ID = gql`
  query getQuiz($id: ID!, $organizationId: ID!) {
    data {
      byline
    }
  }
`;

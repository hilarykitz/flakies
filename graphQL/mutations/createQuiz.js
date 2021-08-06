import gql from 'graphql-tag';

const buildQuestions = (questions) => questions.map((q, i) => ({
  sequence: q.sequence || i,
  text: q.text,
  answers: q.answers.map((text, allowed) => { text, allowed }),
  clues: q.clues.map(({ sequence, text }) => { sequence, text })
}));


export const CREATE_QUIZ = gql`
    mutation createQuiz($data: QuizInput!) {
      createQuiz(data: $data) {
        byline
        title
        pubDate
        questions {
          text
          answers {
            text
            allowed
          }
          clues {
            text
            sequence
          }
        }
      }
    }
`;
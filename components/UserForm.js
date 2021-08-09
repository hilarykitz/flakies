import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { CREATE_QUIZ } from '../graphQL/mutations/createQuiz';
import { GET_QUIZ_BY_ID } from '../graphQL/queries/getQuizById';

const ORG_ID = '81ce7c9f-e1e9-4ddc-a457-47987d6b3158';

export const UserForm = () => {
  const [addQuiz, { data, loading }] = useMutation(CREATE_QUIZ);

  // const [getQuizById, { data: existingData, loading: existingQuizLoading }] =
  //   useQuery(GET_QUIZ_BY_ID);

  const [quizState, setQuizState] = useState({
    title: 'Name Drop',
    byline: '',
    errata: '',
    pubDate: '',
    clue1: '',
    clue2: '',
    clue3: '',
    answers: [],
    organizationId: ORG_ID,
    id: uuidv4(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setQuizState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(quizState);
    // TODO: const quizExists = getQuizById();
    const {
      title,
      byline,
      errata,
      pubDate,
      organizationId,
      id,
      answers,
      clue1,
      clue2,
      clue3,
    } = quizState;

    const buildClues = () =>
      [clue1, clue2, clue3].map((c, i) => ({
        text: c,
        sequence: i,
      }));

    addQuiz({
      variables: {
        data: {
          id,
          organizationId,
          title,
          byline,
          errata,
          pubDate,
          questions: [
            {
              clues: buildClues(),
              answers: [
                {
                  text: 'demo answer',
                  allowed: true,
                },
              ],
            },
          ],
        },
      },
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label>Your quiz:</label>
        <br />
        <input
          autoComplete="off"
          name="title"
          placeholder="title"
          value={quizState.title}
          onChange={handleChange}
        />
        &nbsp;
        <input
          autoComplete="off"
          name="byline"
          placeholder="Byline"
          value={quizState.byline}
          onChange={handleChange}
        />
        &nbsp;
        <input
          autoComplete="off"
          name="pubDate"
          value={quizState.pubDate}
          placeholder="Pub Date (yyyy-mm-dd)"
          onChange={handleChange}
        />
        &nbsp;
        <input
          autoComplete="off"
          name="clue1"
          value={quizState.clues}
          placeholder="Clue 1"
          onChange={handleChange}
        />
        &nbsp;
        <input
          autoComplete="off"
          name="clue2"
          value={quizState.clues}
          placeholder="Clue 2"
          onChange={handleChange}
        />
        &nbsp;
        <input
          autoComplete="off"
          name="clue3"
          value={quizState.clues}
          placeholder="Clue 3"
          onChange={handleChange}
        />
        &nbsp;
        <input
          autoComplete="off"
          name="answers"
          value={[quizState.answers]}
          placeholder="Answers"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Upsert</button>
        <hr />
        {!loading && data ? (
          <p>Quiz uploaded successfully: ${JSON.stringify(data)}</p>
        ) : (
          'Quiz not yet loaded'
        )}
      </div>
    </form>
  );
};

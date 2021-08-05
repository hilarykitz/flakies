import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.scss';
import { ThemeContext } from '../providers/ThemeContext';
import classNames from 'classnames';

import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";


const ADD_QUIZ = gql`
  mutation createQuiz($type: String!) {
     createQuiz(data: {
        id: "81a0d11d-844b-4bad-ac33-d8c8bf4718fc", 
        organizationId: "81ce7c9f-e1e9-4ddc-a457-47987d6b3158",
        byline: "Adam Wika", 
        title: "Hello", 
        pubDate: "2021-08-05",
        questions: [{
        sequence: 0,
        text: "Who am I?"
        answers: [{text: "John Waters", allowed: true}], 
        clues: [{sequence: 1, text: "Director of Cry Baby"}]
        }]
    }) {
        byline
            title
        pubDate
            questions {
        answers {
            text
        }
        }
    }
  }`;


export const Page = ({ children }) => {
    const [theme, setTheme] = useState("night");
    
    const [addQuiz, { data }] = useMutation(ADD_QUIZ);
    
    console.log(data, '*^*^*^*')

    const toggleTheme = () => setTheme(theme => (theme === "day" ? "night" : "day"));
    
    useEffect(() => {
        addQuiz();
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={classNames(styles.container, { [styles.day]: theme === "day" })}>
                <Head>
                    <title>Flakies</title>
                    <meta name="description" content="Flake with ease" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
 
                <main className={styles.main}>
                    <h1>❆</h1>
                    <h2 className={styles.title}>
                        Vague Plans
                    </h2>

                    <div className={styles.grid}>
                        {children}
                    </div>
                </main>
            </div>
        </ThemeContext.Provider>
        )
}
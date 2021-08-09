import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Home.module.scss';
import { ThemeContext } from '../providers/ThemeContext';
import classNames from 'classnames';

export const Page = ({ children }) => {
  const [theme, setTheme] = useState('night');
  const toggleTheme = () =>
    setTheme((theme) => (theme === 'day' ? 'night' : 'day'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={classNames(styles.container, {
          [styles.day]: theme === 'day',
        })}
      >
        <Head>
          <title>Flakies</title>
          <meta name="description" content="Flake with ease" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <br />
          <h1>❆</h1>
          <h2 className={styles.title}>Vague Plans</h2>

          <div className={styles.grid}>{children}</div>
        </main>
      </div>
    </ThemeContext.Provider>
  );
};

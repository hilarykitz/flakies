import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import styles from './Toggle.module.scss';
import classNames from 'classnames';

export const Toggle = () => {
    const { toggleTheme, theme } = useContext(ThemeContext);


    return (
        <div className={styles.toggle} onClick={toggleTheme}>
            <div className={classNames(styles.knob, styles[theme])}>

                { theme === 'day' ? <span role="img" aria-label="sun">🌞</span> : <span role="img" aria-label="moon">🌚</span>}
            </div>
        </div>);
}
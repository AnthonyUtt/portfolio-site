import React, { useEffect, useState } from 'react';
import { useStore } from 'react-redux';
import Layout from '../components/layout';
import styles from '../styles/index.module.scss';

const App = () => {
    const store = useStore();
    const [ isDarkTheme, setDarkTheme ] = useState(store.getState().theme.darkMode);

    const unsubscribe = store.subscribe(() => {
        let s = store.getState();
        setDarkTheme(s.theme.darkMode);
    });

    useEffect(() => {
        return () => unsubscribe();
    });

    return (
        <Layout>
            <>
            <div className={styles.introBlock}>
                <h1>Hi, I'm Anthony!</h1>
                <span className={styles.monoText}>i write code and stuff.</span>
            </div>
            <div className={styles.scrollBlock}>
                <div className={styles.scrollIcon}>
                    <div className={[styles.chevron, isDarkTheme ? styles.dark : styles.light].join(' ')} />
                    <div className={[styles.chevron, isDarkTheme ? styles.dark : styles.light].join(' ')} />
                    <div className={[styles.chevron, isDarkTheme ? styles.dark : styles.light].join(' ')} />
                </div>
                <span className={styles.monoText}>scroll down</span>
            </div>
            </>
        </Layout>
    )
};

export default App;
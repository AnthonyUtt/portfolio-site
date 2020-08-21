import React, { useEffect, useState, ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useStore } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/themes';
import GlobalStyles from '../styles/global';

import {
    AppBar,
    Drawer,
    FormControlLabel,
    IconButton,
    List,
    ListItem,
    Switch,
    Toolbar
} from '@material-ui/core';
import {
    createMuiTheme,
    createStyles,
    makeStyles,
    ThemeProvider as MuiThemeProvider
} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

import routes from '../constants/routes';

import { THEME_DARK_MODE_SET, ThemeDarkModeSetAction } from '../redux/actions';

const theme = createMuiTheme({
    palette:{
        primary: {
            main: '#9c72cc',
        },
        secondary: {
            main: '#867eff',
        },
    },
});

const useStyles = makeStyles(() => 
    createStyles({
        drawer: {
            background: 'white',
        },
        drawerDarkMode: {
            background: '#363537',
        },
        menuButton: {
            color: 'inherit',
        },
        menuButtonDarkMode: {
            color: 'white',
        },
        toggle: {
            color: '#9c72cc',
        },
        toggleDarkMode: {
            color: '#867eff',
        }
    })
);

type LayoutProps = {
    pageTitle?: string;
    children: ReactNode;
};

const Layout = ({ pageTitle, children }: LayoutProps) => {
    const [ menuDrawer, setMenuDrawer ] = useState(false);
    const styles = useStyles();
    const store = useStore();
    
    const [ isDarkTheme, setDarkTheme ] = useState(store.getState().theme.darkMode);
    const unsubscribe = store.subscribe(() => {
        let s = store.getState();
        setDarkTheme(s.theme.darkMode);
    })

    useEffect(() => {
        return () => unsubscribe();
    })

    const toggleDrawer = (open: boolean) => {
        setMenuDrawer(open);
    };

    return (
        <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <>
            <Head>
                <title>{pageTitle ? `${pageTitle} | ` : ''}Anthony Utt | Custom Software Solutions</title>
            </Head>
            <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
                <Toolbar>
                    <FormControlLabel 
                        control={
                            <Switch
                                checked={isDarkTheme}
                                onChange={(e) => {
                                    let action: ThemeDarkModeSetAction = {
                                        type: THEME_DARK_MODE_SET,
                                        darkMode: e.target.checked,
                                    };
                                    store.dispatch(action);
                                }}
                                inputProps={{ "aria-label": "dark mode toggle" }}
                            />
                        }
                        label="Dark Mode"
                        labelPlacement="start"
                        className={isDarkTheme ? styles.toggleDarkMode : styles.toggle}
                        style={{ marginLeft: 'auto' }}
                    />
                    <IconButton
                        onClick={() => toggleDrawer(true)}
                        edge="end"
                        color={isDarkTheme ? "secondary" : "primary"}
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor="right"
                        open={menuDrawer}
                        onClose={() => toggleDrawer(false)}
                        classes={{
                            paper: isDarkTheme ? styles.drawerDarkMode : styles.drawer
                        }}
                    >
                        <List>
                            <Link href={routes.home}>
                                <a>
                                    <ListItem button>Home</ListItem>
                                </a>
                            </Link>
                            <Link href={routes.resume}>
                                <a>
                                    <ListItem button>R&eacute;sum&eacute;</ListItem>
                                </a>
                            </Link>
                            <Link href={routes.portfolio}>
                                <a>
                                    <ListItem button>Portfolio</ListItem>
                                </a>
                            </Link>
                            <Link href={routes.contact}>
                                <a>
                                    <ListItem button>Contact Me</ListItem>
                                </a>
                            </Link>
                        </List>
                    </Drawer>
                </Toolbar>
            </AppBar>
            <GlobalStyles />
            {children}
            </>
        </ThemeProvider>
        </MuiThemeProvider>
    );
};

export default Layout;
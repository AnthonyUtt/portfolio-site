import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        margin: 0;
        padding: 0;
        font-family: 'Nunito Sans', BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        transition: all 0.25s linear;
    }

    a {
        text-decoration: none;
    }

    a:link {
        color: ${({ theme }) => theme.text};
    }

    a:visited {
        color: ${({ theme }) => theme.text};
    }

    a:active {
        color: ${({ theme }) => theme.accentText};
    }

    a:hover {
        color: ${({ theme }) => theme.accentText};
    }
    `;
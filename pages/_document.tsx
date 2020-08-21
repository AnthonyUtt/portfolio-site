import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheets()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collect(<App {...props} />),
            })

        const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                <>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                </>
                ),
            }
        } finally {}
    }

    render() {
        return (
            <html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap" rel="stylesheet" />

                    <meta name="author" content="Anthony Utt" />
                    <meta name="description" content="Custom Software Solutions by Anthony Utt" />
                    <meta name="keywords" content="software, development, programmer, freelance, Anthony, Utt, programs, web, HTML, CSS, React, React developer, React.js" />

                    <meta property="og:url" content={`https://anthonyutt.com`}/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:title" content="Custom Software Solutions by Anthony Utt"/>
                    <meta property="og:description" content="Find out how to get the most out of your website or program with custom software."/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
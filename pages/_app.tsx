import { StylesProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';

import store from '../redux';

const App = ({ Component, pageProps }) => {
    return (
        <StylesProvider injectFirst>
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
        </StylesProvider>
    );
}

export default App;
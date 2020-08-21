import { createStore, combineReducers } from 'redux';
import { themeStateReducer } from './reducers';

const rootReducer = combineReducers({
    theme: themeStateReducer,
});

const store = createStore(rootReducer);

export default store;

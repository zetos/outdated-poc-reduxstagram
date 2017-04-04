import {createStore, compse} from 'redux';
// import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import rootReducer from './reducers/index';

// Data
import comments from './data/comments';
import posts from './data/posts';

// Object with default data
const defaultState = {
    posts,
    comments,
};

const store = createStore(rootReducer, defaultState);
export const history = createHistory();
export default store;

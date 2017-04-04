import React from 'react';
import {render} from 'react-dom';
import {
    Router,
    Route,
} from 'react-router-dom';
import {Provider} from 'react-redux';

// Redux store and History
import store, {history} from './store';

// import styles
import styles from './styles/style.scss';
styles;

// import components
import Main from './components/Main';
import Single from './components/Single';
import App from './components/App';

const photo = () => (
    <Main component={Single} />
);

const route = (
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/view/:postId" component={photo} />
            </div>
        </Router>
    </Provider>
);

render(route, document.getElementById('app'));

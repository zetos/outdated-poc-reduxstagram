import React from 'react';
import {render} from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

// import styles
import styles from './styles/style.scss';
styles;

// import components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

const photo = () => (
    <Main component={Single} />
);

const home = () => (
    <Main component={PhotoGrid} />
);

const route = (
    <Router>
        <div>
            <Route exact path="/" component={home} />
            <Route path="/view/:postId" component={photo} />
        </div>
    </Router>
);

render(route, document.getElementById('app'));

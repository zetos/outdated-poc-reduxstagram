import React from 'react';
import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';

const Main = React.createClass({
    render() {
        return (
            <Router>
                <div>
                    <h1>
                        <Link to="/">Reduxstagram</Link>
                    </h1>
                </div>
            </Router>
        );
    },
});

export default Main;

import React from 'react';
import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';

export default class Main extends React.Component {

    render() {
        const Component = this.props.component;
        return (
            <Router>
                <div>
                    <h1>
                        <Link to="/">Reduxstagram</Link>
                    </h1>
                    <Component/>
                </div>
            </Router>
        );
    }
}


Main.propTypes = {
    component: React.PropTypes.func,
};

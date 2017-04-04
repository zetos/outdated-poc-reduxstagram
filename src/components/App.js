import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';
import React from 'react';

import PhotoGrid from './PhotoGrid';


const home = () => (
    <Main component={PhotoGrid} />
);

function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps)(home);

export default App;

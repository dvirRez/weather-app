import React from 'react';
import ReactDom from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';
import Home from '../Home/Home';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                </div>
            </Router>
        )
    }
}
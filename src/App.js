import React, {Component} from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Weather from './components/Weather';
import About from './components/About';
import Examples from './components/Examples'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Get Weather</h2>
                </div>
                <Router history={hashHistory}>
                    <Route path='/' component={Main}>
                        <Route path='about' component={About} />
                        <Route path='examples' component={Examples}/>
                        <IndexRoute component={Weather}/>

                    </Route>
                </Router>
            </div>
        );
    }
}

export default App;

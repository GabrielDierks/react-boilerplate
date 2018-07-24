import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import Contact from '../Contact';

import Menu from '../../components/Menu';
import './App.css';
import Header from '../../components/Header';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Switch>
                <Menu />
            </div>
        );
    }
}

export default App;

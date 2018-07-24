import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import Contact from '../Contact';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './App.css';


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
                <Footer />
            </div>
        );
    }
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
        <div className="Header">
            <Link to="/">
            <img src={logo} className="App-logo" alt="logo"/>
            </Link>
        </div>
        );
    }
}

export default Header;


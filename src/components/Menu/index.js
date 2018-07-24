import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.openMenuHandler = this.openMenuHandler.bind(this);
    }

    openMenuHandler() {
        const { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
    }

    render() {
        const { isOpen, isActive } = this.state;

        return (
            <div className={`Menu ${isOpen ? 'open' : ''}`}>
                <div className="Nav">
                    <div className={`Nav-menu ${isActive ? 'hidden' : ''}`}>
                        <Link to="/" onClick={this.openMenuHandler} className="Nav-menu-item">
                            Home
                        </Link>
                        <Link to="/about" onClick={this.openMenuHandler} className="Nav-menu-item">
                            About
                        </Link>
                        <Link
                            to="/contact"
                            onClick={this.openMenuHandler}
                            className="Nav-menu-item"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
                <div className="Menu-bar">
                    <button
                        className={`Menu-button ${isOpen ? 'open' : ''}`}
                        onClick={this.openMenuHandler}
                        type="button"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>
        );
    }
}

export default Menu;

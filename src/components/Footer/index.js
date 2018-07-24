import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
                <Link to="/">
                    <p>legal</p>
                </Link>
                <Link to="/">
                    <p>privacy</p>
                </Link>
            </div>
        );
    }
}

export default Footer;

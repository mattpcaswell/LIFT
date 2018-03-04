import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-text">LIFT</div>
                <div className="header-divider"></div>
                <div className="header-text-right">MATT CASWELL</div>
            </div>
        );
    }
}

export default Header;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './application-bar.scss';

import logo from '../../assets/img/logo-codigo-red.svg';
class ApplicationBar extends Component {
    render() { 
        return (
            <header className="app-nav">
                <div className="logo">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <nav className="nav-list">
                    <ul>
                        <li>
                            <Link to="/work">Work</Link>
                        </li>
                        <li>
                            <Link to="/solutions">Solutions</Link>
                        </li>
                        <li>
                            <Link to="/services">Services</Link>
                        </li>
                        <li>
                            <Link to="/about">about us</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/blog">
                                <button>
                                    Request a quote
                                </button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}
 
export default ApplicationBar;
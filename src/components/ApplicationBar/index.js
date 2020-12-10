import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './application-bar.scss';

import logo from '../../assets/img/logo-codigo-red.svg';
import menu from '../../assets/img/menu.png';
class ApplicationBar extends Component {
    render() { 
        return (
            <header >
                
                <div className="app-nav">
                    <div className="logo">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <nav className="nav-list">                                                
                        <div className="mobile-btn">
                            <img src={menu} alt="menu"/>
                        </div>
                        <ul>
                            <li>
                                <Link to="/work?tags=all">Work</Link>
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
                            <li className="quote">
                                <Link to="/blog">
                                    <button>
                                        Request a quote
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}
 
export default ApplicationBar;
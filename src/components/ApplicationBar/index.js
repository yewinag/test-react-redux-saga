import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './application-bar.scss';

import logo from '../../assets/img/logo-codigo-red.svg';
import menu from '../../assets/img/menu.png';
class ApplicationBar extends Component {

    detectRoute = () => window.location.pathname == '/work' || window.location.pathname == '/'; // detect route

    render() { 
        return (
            <header >                
                <div className="app-nav">
                    <a href="/work?tags=all">
                        <div className="logo">
                            {
                                this.detectRoute() ?
                                    <img src={logo} className="App-logo" alt="logo" />    
                                    :                            
                                    <div className="back-icon">
                                        <div className="icon"/>
                                        <p className="back-txt">back to work</p>
                                    </div>
                            }                        
                        </div>
                    </a>
                    <nav className="nav-list">                                                
                        <div className="mobile-btn">
                            <img src={menu} alt="menu"/>
                        </div>
                        <ul>
                            <li className={this.detectRoute() ? '':'detail'}>
                                <Link to="/work?tags=all">Work</Link>
                            </li>
                            <li className={this.detectRoute() ? '':'detail'}>
                                <Link to="/solutions">Solutions</Link>
                            </li>
                            <li className={this.detectRoute() ? '':'detail'}>
                                <Link to="/services">Services</Link>
                            </li>
                            <li className={this.detectRoute() ? '':'detail'}>
                                <Link to="/about">about us</Link>
                            </li>
                            <li className={this.detectRoute() ? '':'detail'}>
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
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './application-bar.scss';

import logo from '../../assets/img/logo-codigo-red.svg';
import menu from '../../assets/img/menu.png';
import close from '../../assets/img/close.png';
class ApplicationBar extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isOpenMenu: false
        }

    }
    
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
                        {
                            this.state.isOpenMenu ?
                            <div className="mobile-btn" onClick={()=> this.setState({isOpenMenu: !this.state.isOpenMenu})}>                            
                                <img src={close} alt="menu"/>                            
                            </div>                        
                            :
                            <div className="mobile-btn" onClick={()=> this.setState({isOpenMenu: !this.state.isOpenMenu})}>                                
                                <img src={menu} className="close" alt="menu" />                                
                            </div>                                                        
                        }                                                                                             
                        <ul className={this.state.isOpenMenu ? "open" : ""}>                            
                            <li className={this.detectRoute() ? '':'detail'}>
                                <a href="/work?tags=all">Work</a>
                            </li>
                            <li className={this.detectRoute() ? '':'detail'}>
                                <a href="/solutions">Solutions</a>
                            </li>
                            <li className={this.detectRoute() ? '':'detail'}>
                                <a href="/services">Services</a>
                            </li>
                            <li className={this.detectRoute() ? '':'detail'}>
                                <a href="/about">about us</a>
                            </li>
                            <li className={this.detectRoute() ? '':'detail'}>
                                <a href="/blog">Blog</a>
                            </li>
                            <li className={this.detectRoute() ? 'mobile':'detail mobile'}>
                                <a href="/">Request a quote</a>
                            </li>
                            <li className={this.detectRoute() ? 'mobile':'detail mobile'}>
                                <a href="/">Let's chat</a>
                            </li>
                            <li className="quote">
                                <a href="/blog">
                                    <button>
                                        Request a quote
                                    </button>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}
 
export default ApplicationBar;
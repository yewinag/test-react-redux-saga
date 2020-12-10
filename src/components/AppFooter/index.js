import React, { Component } from 'react';
 
import './app-footer.scss';
import img from '../../assets/img/social-facebook.svg';
class AppFooter extends Component {
    render() { 
        return (
            <footer className="section footer">
                <div>
                    <h5 className="title">Let’s have a chat</h5>
                </div>                
                <div className="step-layout">
                {
                    steps.map((item, index)=> (
                        <div className="step-item" key={index}>
                            <h5 className="item-title">{item.title}</h5>
                            <p className="item-txt">{item.txt}</p>
                        </div>
                    ))
                }
                </div>
                <div className="social-info">
                    {
                        social.map( (item, index)=> (
                            <div key={index}>
                            <a href={item.link} className="social__item">
                                <img src={item.url} alt='socail logo'/>                                      
                            </a>
                            </div>
                        ))
                    }                                        
                </div>
                <div className="address">
                    <p>Copyright © Codigo - Mobile App Developer Singapore</p>
                    <p>+65 6455 9790 • 26 Sin Ming Lane, Midview City #07-115 Singapore 573971</p>
                </div>
            </footer>
        );
    }
}
 
export default AppFooter;


const social = [
    {
        url: 'https://www.codigo.co/img/icons/social-facebook.svg',
        link: 'https://www.facebook.com/codigo.co/'
    },
    {
        url: 'https://www.codigo.co/img/icons/social-twitter.svg',
        link: 'https://twitter.com/CodigoApps'
    },
    {
        url: 'https://www.codigo.co/img/icons/social-instagram.svg',
        link: 'https://www.instagram.com/hellocodigo'
    },
    {
        url: 'https://www.codigo.co/img/icons/social-linkedIn.svg',
        link: 'https://www.linkedin.com/company/codigo-pte-ltd'
    }
]
const steps = [
    {
        title: "Build",
        txt: "Help you build something"
    },
    {
        title: "Co-incubate",
        txt: "Co-incubate an idea together"
    },
    {
        title: "Customise",
        txt: "Customise a solution for your business"
    },
    {
        title: "Organise",
        txt: "Organise learning sessions with us"
    }
]
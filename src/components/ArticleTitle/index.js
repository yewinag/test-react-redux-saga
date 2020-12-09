import React, { Component } from 'react';
 
import './article-title.scss';

class ArticleTitle extends Component {
    render() { 
        return (
            <div className="section article-title">
                <p className="title title-one">Here’s 5% of </p>
                <p className="title title-two">our published work.</p>
                <p className="title title-three">See 100% of our power.</p>
            </div>
        );
    }
}
 
export default ArticleTitle;
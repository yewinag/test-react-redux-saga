import React, { Component } from 'react';
import './categories.scss' 

class Categories extends Component {
    render() { 
        return (
            <div className="section categories">
                <ul>
                    <li><a>All</a></li>
                    <li><a>Transport & Logistics</a></li>
                    <li><a>Co-incubation</a></li>
                    <li><a>Telco</a></li>
                    <li><a>Food & Beverage</a></li>
                    <li><a>Banking & Finance</a></li>
                    <li><a>Healthcare</a></li>
                    <li><a>Others</a></li>
                    <li><a>Media</a></li>
                    <li><a>Lifestyle</a></li>
                    <li><a>Retail & Entertainment</a></li>
                    <li><a>Start-ups</a></li>
                </ul>
            </div>
        );
    }
}
 
export default Categories;
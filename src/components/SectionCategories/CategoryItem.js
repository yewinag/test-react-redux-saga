import React, { Component } from 'react';
 
import './category-item.scss';
import img from '../../assets/img/FF-1.jpg';
console.log(img)
class CategoryItem extends Component {
    render() { 
        return (
            <a href="/work" className="cat-item">
                <img src={this.props.imgUrl} alt="services"/>
            </a>
        );
    }
}
 
export default CategoryItem;
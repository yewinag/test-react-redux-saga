import React from 'react';
 
import './category-item.scss';

const CategoryItem = (props) => (
        <a href="/work" className="cat-item">
            <p>{props.item.txt}</p>
            <h5>{props.item.name}</h5>
            {/* <img src={this.props.imgUrl} alt="services"/> */}
        </a>
    );    
 
export default CategoryItem;
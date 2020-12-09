import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import './section-categories.scss';

class SectionCategories extends Component {
    render() { 
        return (
            <div className="section-categories">
                <CategoryItem imgUrl={'/static/media/CDG-2-1.e310a9c9.jpg'}/>
                {/* <CategoryItem imgUrl={'/static/media/FF-1.f99ab7ef.jpg'}/> */}
                <CategoryItem imgUrl={'/static/media/CDG-2-1.e310a9c9.jpg'}/>
                <CategoryItem imgUrl={'/static/media/CDG-2-1.e310a9c9.jpg'}/>
                <CategoryItem imgUrl={'/static/media/CDG-2-1.e310a9c9.jpg'}/>
            </div>
        );
    }
}
 
export default SectionCategories;
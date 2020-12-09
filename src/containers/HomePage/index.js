import React, { Component } from 'react';
import ArticleTitle from '../../components/ArticleTitle';
import Categories from '../../components/Categories';
import AppFooter from '../../components/AppFooter';
import SectionCategories from '../../components/SectionCategories';
 
class HomePage extends Component {
    render() { 
        return (
            <div>
                <ArticleTitle />
                <Categories />
                <SectionCategories />
                <AppFooter />
            </div>
        );
    }
}
 
export default HomePage;
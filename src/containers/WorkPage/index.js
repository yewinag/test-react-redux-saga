import React, { Component } from 'react';
import ArticleTitle from '../../components/ArticleTitle';
import Categories from '../../components/Categories';
import AppFooter from '../../components/AppFooter';
import SectionCategories from '../../components/SectionCategories';
 
class WorkPage extends Component {
    

    render() { 
        const { search } = this.props.location;
        return (
            <section>
                <ArticleTitle />
                <Categories />
                <SectionCategories searchParam={search}/>
                <AppFooter />
            </section>
        );
    }
}
 
export default WorkPage;
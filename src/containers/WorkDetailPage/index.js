import React, { Component } from 'react';
import ArticleTitle from '../../components/ArticleTitle';
import Categories from '../../components/Categories';
import AppFooter from '../../components/AppFooter';
import SectionCategories from '../../components/SectionCategories';
import WorkDetailSection from '../../components/WrokDetailSection';
 
class WorkPage extends Component {
    
    render() { 
        const { search } = this.props.location;
        return (
            <section>
                <WorkDetailSection />
                <AppFooter />
            </section>
        );
    }
}
 
export default WorkPage;
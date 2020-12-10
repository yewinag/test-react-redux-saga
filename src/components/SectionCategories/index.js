import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import CategoryItem from './CategoryItem';

import { requestData } from '../../actions';

import './section-categories.scss';

class SectionCategories extends Component {
    componentDidMount(){
        const { searchParam } = this.props;                
        if(searchParam){
            this.props.requestData(searchParam.split('=')[1]);
        }else{
            console.log(searchParam);
            this.props.requestData("all");
        }
    }
    renderServices = ()=> (
        this.props.services.data.length > 0 && this.props.services.data.map((item,index)=> (
            <CategoryItem item={item} key={index}/>                
        ))
    )                               
    render() { 
        
        return (
            <div className="section-categories">                
                { this.renderServices()}                              
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        services: state.services
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestData: (params) => dispatch(requestData(params))                    
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SectionCategories);
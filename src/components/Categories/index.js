import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { requestData } from '../../actions';

import { services } from '../../constants'

import './categories.scss' 
class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: 'all'
        };
    }
     
    handleSelect = (item) => {
        this.setState({ activeItem: item.keyword})
        this.props.requestData(item.keyword)
    }
    render() { 
        return (
            <div className="section categories">
                <ul>
                    {
                    services.map((item, index)=> 
                        <li 
                            key={index} 
                            onClick={()=> this.handleSelect(item)}                 
                            className={ item.keyword == this.state.activeItem ? 'active' : ''}            
                        >
                            {/* {item.keyword == this.state.activeItem ? <span />:null}                             */}                            
                            <Link to={`/work?tags=${item.keyword}`}>{item.name}</Link>                            
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestData: (params) => dispatch(requestData(params))
                    
    }
}
export default connect(null, mapDispatchToProps)(Categories);
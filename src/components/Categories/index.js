import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { requestData } from '../../actions';

import { services } from '../../constants'

import './categories.scss' 
class Categories extends Component {
    render() { 
        return (
            <div className="section categories">
                <ul>
                    {
                    services.map((item, index)=> 
                        <li key={index} onClick={()=> this.props.requestData(item.keyword)}>
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
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
                            <Link to={`/work?tags=${item.keyword}`}>{item.name}</Link>                            
                        </li>
                    )}
                </ul>
                <div className="legend">
                    <p className="legend-title">Legend</p>
                    <div className="legend-category">
                        <div className="category-item">
                            <div className="category-img" style={{backgroundImage: `url(${'https://www.codigo.co/img/ui/ico-app.svg'})`}}/>
                            <div>App</div>
                        </div>
                        <div className="category-item">
                            <div className="category-img" style={{backgroundImage: `url(${'https://www.codigo.co/img/ui/ico-web.svg'})`}}/>
                            <div>Web</div>
                        </div>
                        <div className="category-item">
                            <div className="category-img" style={{backgroundImage: `url(${'https://www.codigo.co/img/ui/ico-cms.svg'})`}}/>
                            <div>CMS</div>
                        </div>
                        <div className="category-item">
                            <div className="category-img" style={{backgroundImage: `url(${'https://www.codigo.co/img/ui/ico-uiux.svg'})`}}/>
                            <div>UI/UX</div>
                        </div>
                    </div>
                </div>
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
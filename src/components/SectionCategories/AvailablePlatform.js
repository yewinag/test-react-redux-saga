import React, { Component } from 'react';
 
import './available-platform.scss';

const AvailablePlatform = (props) => (            
            <div className="available-layout">
                {props.mobile && <div className="platform-icon" style={{backgroundImage: `url(${'https://www.codigo.co/img/ui/ico-app.svg'})`}}/>}
                {props.web && <div className="platform-icon" style={{backgroundImage: `url(${'https://www.codigo.co/img/ui/ico-web.svg'})`}}/>}
                {props.setting && <div className="platform-icon" style={{backgroundImage: `url(${'https://www.codigo.co/img/ui/ico-cms.svg'})`}}/>}
            </div>
        );    
 
export default AvailablePlatform;   
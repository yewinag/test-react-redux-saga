import React from 'react';
 
import './work-detail-section.scss';

const WorkDetailSection = ({data}) =>(
            <section className="detail-section">
                <div className="title">
                    <h4>{data && data.name}</h4>                                        
                </div>
                <div className="detail-layout">
                    <div className="left">
                        <div className="app-available">
                            <a href="https://itunes.apple.com/us/app/7rewards-7-eleven-singapore/id1223957237?mt=8">                                
                                <div className="app-icon" style={{backgroundImage: `url(${'https://www.codigo.co/img/ui/ico-app_store@2x.png'})`}}/>
                                <p className="label">Available on</p>
                                <p className="app-title">App store</p>                                                                    
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=sg.com.seveneleven.sevenrewards&hl=en">                                
                                <div className="app-icon" style={{backgroundImage: `url(${'https://www.codigo.co/img/ui/ico-google_play-store@2x.png'})`}}/>                                    
                                <p className="label">Available on</p>
                                <p className="app-title">Google play</p>                                                                
                            </a>
                            <a href="https://www.7-eleven.com.sg/">                                    
                                <div className="app-icon" style={{backgroundImage: `url(${'https://www.codigo.co/img/ui/ico-web@2x.png'})`}}/>                                                                        
                                <p className="label">Live on</p>
                                <p className="app-title">website.com</p>                                                                    
                            </a>                 
                        </div>
                        <div className='about-business'>
                            <p>
                            {data && data.desc}
                            </p>
                        </div>
                        <div className="feature">                            
                            <p>Key Features</p>                        
                            <ul>
                                <li>Rewards award & redemption</li>
                                <li>POS integration</li>
                                <li>One CMS serving content to both 7Rewards mobile apps and 7-Eleven website</li>
                            </ul>                        
                        </div>
                    </div>
                    <div className="right">
                        <section className="back-layout" style={{backgroundColor: (data && data.bg_color) ? data.bg_color: 'rgb(27, 164, 85)'}}>
                            {
                                data && data.detail_img ? 
                                <img className="app-sample" src={data.detail_img} alt="name"/>
                                :
                                <img className="app-sample" src={'https://cdn.codigo.co/uploads/2018/04/7Eleven_01.png'} alt="name"/>
                            }
                            
                        </section>
                    </div>
                </div>
            </section>
        );
 
export default WorkDetailSection;
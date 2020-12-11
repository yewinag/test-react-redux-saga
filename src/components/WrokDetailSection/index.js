import React, { Component } from 'react';
 
import './work-detail-section.scss';

class WorkDetailSection extends Component {
    render() { 
        return (
            <section className="detail-section">
                <div className="title">
                    <h4>7Rewards</h4>
                </div>
                <div className="detail-layout">
                    <div className="left">
                        <div className="app-available">
                            <a href="https://itunes.apple.com/us/app/7rewards-7-eleven-singapore/id1223957237?mt=8" target="_blank">                                
                                <div className="app-icon" style={{backgroundImage: `url(${'https://www.codigo.co/img/ui/ico-app_store@2x.png'})`}}/>
                                <p className="label">Available on</p>
                                <p className="app-title">App store</p>                                                                    
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=sg.com.seveneleven.sevenrewards&hl=en" target="_blank">                                
                                <div className="app-icon" style={{backgroundImage: `url(${'https://www.codigo.co/img/ui/ico-google_play-store@2x.png'})`}}/>                                    
                                <p className="label">Available on</p>
                                <p className="app-title">Google play</p>                                                                
                            </a>
                            <a href="https://www.7-eleven.com.sg/" target="_blank">                                    
                                <div className="app-icon" style={{backgroundImage: `url(${'https://www.codigo.co/img/ui/ico-web@2x.png'})`}}/>                                                                        
                                <p className="label">Live on</p>
                                <p className="app-title">website.com</p>                                                                    
                            </a>                 
                        </div>
                        <div className='about-business'>
                            <p>
                            Convenience now comes with a side of rewards.
                            The 7Rewards mobile app is a delightful and effortless experience for all loyal 7-Eleven customers. Implemented islandwide and fully integrated with every point-of-sale system, all customers can simply scan their unique member barcode after every purchase and receive stamps that can be used to redeem any rewards of their choice.
                            Powered by a custom-made CMS, 7-Eleven can track and monitor their customers' purchasing and redemption behaviours to craft more palatable and desirable promotional campaigns or even conduct market surveys on new products before public launches all via a comprehensive dashboard.
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
                        <section className="back-layout">
                            <img className="app-sample" src={'https://cdn.codigo.co/uploads/2018/04/7Eleven_01.png'} />
                        </section>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default WorkDetailSection;
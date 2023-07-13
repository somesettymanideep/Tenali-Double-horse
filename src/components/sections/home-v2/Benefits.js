import React, { Component } from 'react';
import { pizzamenu, pastamenu } from '../../../data/menu.json';

class Benefits extends Component {
    render() {
        return (
            
            <div className="ct-categories container mt-5 pt-3 mb-5">
                {/* Category Start */}
                <div className="ct-category">
                    <div className="ct-category-bg" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/categories-lg/4.jpg)" }} />
                    <div className="ct-category-content">
                        <div className="ct-category-content-inner">
                            <div className="section-title-wrap section-header">
                                <h5 className="custom-primary">TenaliDoublehorse</h5>
                                <h2 className="title">Experience the Finest Quality Pulses , Dalls and Sunnundalu from Tenali Double Horse</h2>
                                <p className="subtitle">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
          </p>
                            </div>
                            {/* Menu Start */}
                            <div className="row">
                                {pizzamenu.map((item, i) => (
                                    <div key={i} className="col-lg-6">
                                        <div className="ct-mini-menu-item">
                                            <div className="ct-mini-menu-top">
                                                <h5>{item.title}</h5>
                                                {/* <div className="ct-mini-menu-dots" />
                                                <span className="custom-primary">{new Intl.NumberFormat().format((item.price).toFixed(2))}$</span> */}
                                            </div>
                                            {/* <div className="ct-mini-menu-bottom">
                                                <p>{item.shortdesc}</p>
                                            </div> */}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Menu End */}
                        </div>
                    </div>
                </div>
                {/* Category End */}
               
            </div>
        );
    }
}

export default Benefits;
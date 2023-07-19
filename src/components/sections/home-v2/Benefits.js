import React, { Component } from 'react';
import { pizzamenu, pastamenu } from '../../../data/menu.json';

class Benefits extends Component {
    render() {
        return (
            
            <div className="ct-categories container mt-5 pt-3 mb-5">
                {/* Category Start */}
                <div className="ct-category">
                    {/* <div className="ct-category-bg img-responsive" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/categories-lg/tenali-double-horse-benefits.png)" }} /> */}
                    <div className="col-lg-6 mb-lg-30 ct-single-img-wrapper">
                            <img src={process.env.PUBLIC_URL + "/assets/img/categories-lg/three.png"} alt="img" />
                           
                        </div>
                    <div className="ct-category-content">
                        <div className="ct-category-content-inner">
                            <div className="section-title-wrap section-header">
                                <h5 className="custom-primary">Tenali Double horse</h5>
                                <h2 className="title">Experience the Finest Quality Pulses , Dalls from Tenali Double Horse</h2>
                                <p className="subtitle" style={{textAlign:'justify'}}>
                                To provide the best quality Products, the team is committed to providing the highest quality products and services to our customers to satisfy their needs and expectations of quality, reliability, and timely delivery. 
          </p>
                            </div>
                            {/* Menu Start */}
                            <div className="row">
                                {pizzamenu.map((item, i) => (
                                    <div key={i} className="col-lg-6">
                                        <div className="ct-mini-menu-item" style={{display:'flex'}}>
                                            <div className="ct-mini-menu-bottom mr-lg-3" style={{fontSize:'25px'}}>
                                            <i className={item.icon}  style={{color:'#ED4E53'}}/>
                                            </div>
                                            <div className="ct-mini-menu-top">
                                                <h5>{item.title}</h5>
                                               
                                            </div>
                                            
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
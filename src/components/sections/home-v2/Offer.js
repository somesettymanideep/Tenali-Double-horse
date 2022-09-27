import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Offer extends Component {
    render() {
        return (
            <div className="section light-bg gap ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-lg-30 ">
                            <img src={process.env.PUBLIC_URL + "/assets/img/misc/Eco Pack.jpg"}  alt="img" className='shadow-sm  mb-5 bg-white rounded' />
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title-wrap mr-lg-30">
                                <h5 className="custom-primary">Special Edition</h5>
                                <h2 className="title">Why Choose Tenali Double Horse Eco Pack?</h2>
                                <p className="subtitle">
                                In a world where almost everything adds to pollution or negatively influences nature and human health, Tenali Double Horse has come up with using eco-friendly products, to break this chain.
          </p>
                                <p className="subtitle">
                                We encourage you to switch to the right choices, as it is the need of the hour!
          </p>
                                <Link to="/menu-item-v1" className="btn-custom">Order Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Offer;
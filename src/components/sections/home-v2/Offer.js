import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Offer extends Component {
    render() {
        return (
            <div className="section light-bg mt-3 mb-5  ">
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
                                We are thrilled to announce arrival of our ultimate high-quality Pulses & Dalls,  Sunnundalu now available in UAE. Indulge in the rich flavors and authentic taste of our premium products, sourced and processed with utmost care. Whether you’re craving the perfect bowl of lentils or the traditional goodness of Sunnundalu, we’ve got you covered. Plus, we’re delighted to offer convenient home delivery services in Dubai and Sharjah. Experience the essence of culinary excellence with Tenali Double Horse
          </p>
                                {/* <p className="subtitle">
                                We encourage you to switch to the right choices, as it is the need of the hour!
          </p> */}
                                <a href={"https://tenalidoublehorse.com/product/urad-gota-1-2-kg-eco-pack-of-2/"} className="btn-custom">Order Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Offer;
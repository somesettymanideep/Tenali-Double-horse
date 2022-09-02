import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Aboutus extends Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-lg-30 ct-single-img-wrapper">
                            <img src={process.env.PUBLIC_URL + "/assets/img/Tenali-Double-Horse-about-1280x1560.png"} alt="img" />
                            <div className="ct-dots" />
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title-wrap mr-lg-30">
                                <h5 className="custom-primary text-center">Growth</h5>
                                <h2 className="title text-center"> Urad Gota </h2>
                                <p className="subtitle">
                                Since launching in 2005,  tenali double horse has empowered many lives in India and gained millions of people. By putting all the pieces of a successful business in one convenient platform, Tenali Double Horse’s impeccable distribution network got started and grew faster.
          </p>
                                <p className="subtitle">
                                We provide the best quality Urad Gota and Urad Dal near you.
          </p>
                               
                                <Link to="/menu-v1" className="btn-custom">View More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Aboutus;
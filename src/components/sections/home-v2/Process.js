import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const processpost = [
    {
        icon: "flaticon-online-booking",
        title: "Superior Quality",
        text: "delivering excellence in every bite,High-quality standards in terms of freshness, purity, and taste."
    },
    {
        icon: "flaticon-medal",
        title: "Trusted Brand",
        text: "Building trust with our customers by consistently delivering exceptional quality and reliability."
    },
    {
        icon: "flaticon-grocery",
        title: "High Nutritional Value",
        text: "Abundant nutrients, vitamins, minerals for optimal health through our products"
    }
]

class Process extends Component {
    render() {
        return (
            <div className="container  mb-5">
                <div className="section-title-wrap section-header text-center ">
                    <h5 className="custom-primary">Why</h5>
                    <h2 className="title">Tenali Double horse</h2>
                    <p className="subtitle">
                    Tenali Double Horse industry-leading all-in-one platform makes it simple to set a healthy breakfast regime. To provide the best quality Urad Gota and Urad Dall near you.
                        </p>
                </div>
                <div className="row infographics-2">
                    {processpost.map((item, i) => (
                        <div key={i} className="col-lg-4 col-md-6 col-sm-6">
                            <div className="ct-infographic-item">
                                <i className={item.icon} />
                                <h4>{item.title}</h4>
                                <p style={{textAlign:'justify'}}>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* <div className="section-btn">
                    <Link to="/menu-v1" className="btn-custom">Order Online</Link>
                </div> */}
            </div>
        );
    }
}

export default Process;
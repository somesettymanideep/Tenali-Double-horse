import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class Aboutcompany extends Component {
    
    render() {
        return (
            <div className="subheader gap-section  pt-5" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/bg/one-about.png)", paddingTop:'30px!important' }}>
                <div className="container">
                    <div className="subheader-inner">
                      
                        <nav aria-label="breadcrumb breadcrumb-two">
                            <ol className="breadcrumb breadcrumb-two">
                                <li className="breadcrumb-item "> <h5 className="custom-primary">Tenali Double Horse</h5></li>
                                <li className="breadcrumb-item active text-dark" aria-current="page">Since launching in 2005,  Tenali Double Horse has empowered many lives in India and gained millions of people. By putting all the pieces of a successful business in one convenient platform, Tenali Double Horse’s impeccable distribution network got started and grew faster. We provide the best quality Urad Gota and Urad Dall near you.</li>
                                <a href={"/about"} className="btn-custom  mt-4">Read more</a>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Aboutcompany;
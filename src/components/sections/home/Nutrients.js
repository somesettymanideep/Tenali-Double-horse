import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class Nutrients extends Component {
    render() {
        return (
            <div className="subheader padding-section  "    style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/bg/one-side.png)",position:'relative' }}>
                <div className="container">
                    <div className="subheader-inner">
                    <div className="gheeimgsec animate-right" >
						<img src={process.env.PUBLIC_URL + "/assets/img/bg/two-side.png"}  alt=""/>
					</div>
                      
                        {/* <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item "> <h5 className="custom-primary">Tenali Double Horse</h5></li>
                                <li className="breadcrumb-item active text-dark" aria-current="page">Since launching in 2005,  Tenali Double Horse has empowered many lives in India and gained millions of people. By putting all the pieces of a successful business in one convenient platform, Tenali Double Horse’s impeccable distribution network got started and grew faster. We provide the best quality Urad Gota and Urad Dall near you.</li>
                                <a href={"/about"} className="btn-custom  mt-4">Read more</a>
                            </ol>
                        </nav> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Nutrients;
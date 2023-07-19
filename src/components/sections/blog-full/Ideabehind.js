import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Ideabehind extends Component {
    render() {
        return (
            <div className="section  pb-5  mb-5  ">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6 mb-lg-30 ">
                            <img src={process.env.PUBLIC_URL + "/assets/img/founder.png"}  alt="img" className='shadow-sm   bg-white rounded' />
                        </div>
                        <div className="col-lg-6 alignments">
                            <div className="section-title-wrap mr-lg-30 mt-lg-2">
                                <h5 className="custom-primary">Idea Behind</h5>
                                <h2 className="title">Tenali Double horse</h2>
                                <p className="subtitle" style={{textAlign:'justify'}}>
                                Since launching in 2005,  Tenali Double Horse has empowered many lives in India and gained millions of people. By putting all the pieces of a successful business in one convenient platform, Tenali Double Horse’s impeccable distribution network got started and grew faster. We provide the best quality Urad Gota and Urad Dall near you.
          </p>
                                {/* <p className="subtitle">
                                We encourage you to switch to the right choices, as it is the need of the hour!
          </p> */}
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ideabehind;
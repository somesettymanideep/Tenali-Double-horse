import React, { Component } from 'react';

class Founder extends Component {
    render() {
        return (
            <div className="section light-bg pb-5  mb-5  ">
                <div className="container">
                    <div className="row ">
                    <div className="col-lg-6 mb-lg-30 alignments">
                           
                            <div className="section-title-wrap mr-lg-3 mt-lg-2">
                                <h5 className="custom-primary">Founder</h5>
                                <h2 className="title">Creating a vision, shaping a legacy.</h2>
                                <p className="subtitle" style={{textAlign:'justify'}}>
                                Since launching in 2005,  Tenali Double Horse has empowered many lives in India and gained millions of people. By putting all the pieces of a successful business in one convenient platform, Tenali Double Horse’s impeccable distribution network got started and grew faster. We provide the best quality Urad Gota and Urad Dall near you.
          </p>
                               
                               
                            </div>
                        </div>
                        <div className="col-lg-6">
                        <img src={process.env.PUBLIC_URL + "/assets/img/misc/tenali-double-horse-factory-image.jpeg"}  alt="img" className='shadow-sm   bg-white rounded' />
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Founder;
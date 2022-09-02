import React, { Component } from 'react';

class Paragraph extends Component {
    render() {
        return (
            <div className="section light-bg m-2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-lg-30">
                            <img src={process.env.PUBLIC_URL + "/assets/img/misc/tenali-double-horse-logo-800x800.png"} alt="img" className='logo-health'/>
                            <div className="Health-images">
                                <div className="smiley-image">
                            <img src={process.env.PUBLIC_URL + "/assets/img/misc/Tenali-Double-Horse-smiley-50x50.png"} alt="img" className='smiley-logo' />
                            <h3 className="smiley-paragraph">100% Tasty flavour</h3>
                            </div>
                            <div className="leaves-image">
                            <img src={process.env.PUBLIC_URL + "/assets/img/misc/Tenali-Double-Horse-leaves-50x50.png"} alt="img" className='leaves-logo' />
                            <h3 className="smiley-paragraph">fresh & Natural </h3>
                            </div>

                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title-wrap mr-lg-30 text-center">
                                <h5 className="custom-primary">Good Health In</h5>
                                <h2 className="title">Every "Bite"</h2>
                                <p className="subtitle">
                               Pulses are Good Source of Iron. Pulses are also a strachy Food and add fibre is asssociated with a reduced risk of Haert Disease and Type 2 Diabetes
          </p>
                               
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Paragraph;
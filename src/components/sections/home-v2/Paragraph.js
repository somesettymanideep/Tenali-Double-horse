import React, { Component } from 'react';

class Paragraph extends Component {
    render() {
        return (
            <div className="section light-bg gap">
                <div className="container">
                    <div className="row align-items-center ">
                        <div className="col-lg-6 mb-lg-30">
                            <img src={process.env.PUBLIC_URL + "/assets/img/misc/Suma-500x400.png"} alt="img" />
                            
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title-wrap mr-lg-30 text-center">
                                <h5 className="custom-primary">Good Health In</h5>
                                <h2 className="title">Every "Bite"</h2>
                                <p className="subtitle">
                               Pulses are Good Source of Iron. Pulses are also a strachy Food and add fibre to your meal.Eating a high diet fibre is asssociated with a reduced risk of Haert Disease and Type 2 Diabetes
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
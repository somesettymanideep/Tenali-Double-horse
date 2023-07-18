import React, { Component } from 'react';


class Greatplacetowork extends Component {
    render() {
        return (
            <div className="section light-bg pb-5     ">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6 mb-lg-30 ">
                            <img src={process.env.PUBLIC_URL + "/assets/img/misc/great-place-to-work.png"}  alt="img" className='shadow  p-1  bg-white rounded' />
                        </div>
                        <div className="col-lg-6 alignments">
                            <div className="section-title-wrap mr-lg-30 mt-lg-2">
                                <h5 className="custom-primary">Achievement Certificate</h5>
                                <h2 className="title">Great Place to Work</h2>
                                <p className="subtitle" style={{textAlign:'justify'}}>
                                The Great Place to Work certification is a prestigious recognition given to companies that have created a positive workplace culture where employees feel valued, respected, and engaged. Tenali Double Horse Company has achieved this certification by meeting the high standards set by the Great Place to Work Institute.
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

export default Greatplacetowork;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class Nutrients extends Component {
    render() {
        return (
            <section className="section bg-center bg-cover dark-overlay" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/bg/Tenali-Double-Horse-NewsLetter.png)" }}>
                <div className="container">
                    <div className="ct-newsletter">
                        <div className="section-title-wrap section-header">
                            <h2 className="title">Submit Our Feedback</h2>

                        </div>
                        <form method="post">
                            <div className="row">
                                <div className="form-group col-lg-6">
                                    <input type="text" placeholder="First Name" className="form-control" name="fname" />
                                </div>
                                <div className="form-group col-lg-6">
                                    <input type="text" placeholder="Last Name" className="form-control" name="lname" />
                                </div>
                                <div className="form-group col-lg-12">
                                <input type="email" className="form-control" placeholder="Enter your email address" />
                                </div>
                                <div className="form-group col-lg-12">
                                            <textarea name="message" className="form-control" placeholder="Type your message" rows={4} />
                                        </div>
                                <button type="submit" className="btn-custom primary" name="button"> Submit <i className="far fa-paper-plane" /> </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            // <div className="subheader padding-section  "    style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/bg/one-side.png)",position:'relative' }}>
            //     <div className="container">
            //         <div className="subheader-inner">
            //         <div className="gheeimgsec animate-right" >
			// 			<img src={process.env.PUBLIC_URL + "/assets/img/bg/two-side.png"}  alt=""/>
			// 		</div>
                      
                      
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default Nutrients;
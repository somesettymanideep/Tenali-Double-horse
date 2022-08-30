import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Footer extends Component {
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    render() {
        return (
            <footer className={this.props.footer.style}>
                {/* Top Footer */}
                <div className="container">
                    <div className="footer-top">
                        <div className="footer-logo">
                            <img src={process.env.PUBLIC_URL + "/" + this.props.footer.logo} alt="logo" />
                        </div>
                        
                    </div>
                </div>
                {/* Middle Footer */}
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget">
                                <h5 className="widget-title">Quick Links</h5>
                                <ul>
                                    <li> <Link to="/">Gallery</Link> </li>
                                    <li> <Link to=" ">Products</Link> </li>
                                    <li> <Link to=" ">Recipes</Link> </li>
                                    <li> <Link to=" ">Blog</Link> </li>
                                    <li> <Link to=" ">Contact</Link> </li>
                                    <li> <Link to=" ">Shop</Link> </li>
                                    <li> <Link to=" ">Usa</Link> </li>
                                </ul>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget">
                                <h5 className="widget-title">Legal Links</h5>
                                <ul>
                                    <li> <Link to=" ">Terms of Use</Link> </li>
                                    <li> <Link to=" ">Privacy Policy</Link> </li>
                                    <li> <Link to=" ">Shipping Policy</Link> </li>
                                    <li> <Link to=" ">Refund Policy</Link> </li>
                                    <li> <Link to=" ">Payment Services</Link> </li>
                                </ul>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget">
                                <h5 className="widget-title">Contact</h5>
                                <ul>
                                    <li> <Link to=" ">Call Us</Link> </li>
                                    <li> <Link to=" ">Email</Link> </li>
                                    <li> <Link to=" ">Locate</Link> </li>
                                    
                                </ul>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 footer-widget">
                                <h5 className="widget-title">Social Media</h5>
                                <ul className="social-media">
                                    <li> <Link to=" " className="facebook"> <i className="fab fa-facebook-f" /> </Link> </li>
                                    <li> <Link to=" " className="pinterest"> <i className="fab fa-pinterest-p" /> </Link> </li>
                                    <li> <Link to=" " className="google"> <i className="fab fa-google" /> </Link> </li>
                                    <li> <Link to="" className="twitter"> <i className="fab fa-twitter" /> </Link> </li>
                                </ul>
                                <div className="footer-offer">
                                    <p>Signup and get exclusive offers and coupon codes</p>
                                    <Link to=" " className="btn-custom btn-sm shadow-none">Sign Up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="container">
                        <ul>
                            <li> <Link to="">Privacy Policy</Link> </li>
                            <li> <Link to="">Refund Policy</Link> </li>
                            <li> <Link to="">Cookie Policy</Link> </li>
                            <li> <Link to="">Terms &amp; Conditions</Link> </li>
                        </ul>
                        <div className="footer-copyright">
                            <p> Copyright © 2022 <Link to=" ">Tenali Double Horse </Link> All Rights Reserved. </p>
                            <Link to=" " className="back-to-top" onClick={() => this.scrollToTop()}>Back to top <i className="fas fa-chevron-up" /> </Link>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
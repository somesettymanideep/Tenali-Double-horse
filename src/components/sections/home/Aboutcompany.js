import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class Aboutcompany extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          isVisible: false,
        };
        this.sectionRef = React.createRef();
      }
    
      componentDidMount() {
        const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.3, // Adjust this value to control when the section becomes visible during scrolling
        };
    
        const observer = new IntersectionObserver(this.handleIntersection, observerOptions);
        if (this.sectionRef.current) {
          observer.observe(this.sectionRef.current);
        }
      }
    
      handleIntersection = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.setState({ isVisible: true });
          }
        });
      };
    render() {
        const { isVisible } = this.state;
        return (
            <div ref={this.sectionRef} className={`subheader gap-section pt-5 fade-in-section ${isVisible ? 'visible' : ''}`} style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/bg/one-about.png)", paddingTop:'30px!important' }}>
                <div className="container">
                    <div className="subheader-inner">
                      
                        <nav  aria-label="breadcrumb breadcrumb-two">
                            <ol  className="breadcrumb breadcrumb-two ">
                                <li className="breadcrumb-item "><h5 className="custom-primary" style={{marginBottom:'10px'}}>About</h5></li>
                                <li className="breadcrumb-item "><h2 className="title" style={{marginBottom:'10px'}}>Tenali Double Horse</h2></li>
                                <li className="breadcrumb-item active text-dark" aria-current="page">Since launching in 2005,  Tenali Double Horse has empowered many lives in India and gained millions of people. By putting all the pieces of a successful business in one convenient platform, Tenali Double Horse’s impeccable distribution network got started and grew faster. We provide the best quality Urad Gota and Urad Dall near you.</li>
                                {/* <a href={"/about"} className="btn-custom  mt-4">Read more</a> */}
                                <Link  to={"/about"} className="btn-custom primary mt-4">Read More  </Link>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Aboutcompany;
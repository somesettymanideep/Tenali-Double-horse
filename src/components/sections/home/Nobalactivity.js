import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class Nobalactivity extends Component {
    
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
           
              //  <div  ref={this.sectionRef}  className={`activites mb-4 fade-in-section ${isVisible ? 'visible' : ''}`} >
              //       <h2 className='title text-center'>Notable Activities</h2>
              //       <div className='social-media-actives'>
              //           <img src={process.env.PUBLIC_URL + "/assets/img/misc/aha.png"} className="aha" alt="aha"/>
              //           <img src={process.env.PUBLIC_URL + "/assets/img/misc/double-horse.png"} className="aha" alt="aha"/>
              //           <img src={process.env.PUBLIC_URL + "/assets/img/misc/amma-kuchi.png"} className="aha" alt="aha"/>   
              //       </div>
              //   </div>
            <div  ref={this.sectionRef}  className={`activites mb-4 fade-in-section ${isVisible ? 'visible' : ''}`} >
            <div className="container">
            <h2 className='title text-center pb-5'>Notable Activities</h2>
              <div className="row align-items-center ">
             
                <div className="col-lg-5 mb-lg-30">
                <img src={process.env.PUBLIC_URL + "/assets/img/misc/double-horse.png"}  alt="aha"/>
                </div>
                <div className="col-lg-7 mb-lg-30" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                  {/* <div class="gallery" >
                    <img src="https://picsum.photos/id/1004/400/400" alt="a lovely kiss in the night" />
                    <img src="https://picsum.photos/id/1013/400/400" alt="a women inside a car" />
                    <img src="https://picsum.photos/id/1066/400/400" alt="a baby" />
                    <img src="https://picsum.photos/id/325/400/400" alt="a girl in the forest" />
                    <img src="https://picsum.photos/id/65/400/400" alt="a girl" />
                  </div> */}
                  <div className='animation-cube'>
                    {/* <div className="title-cube">
                      <h1>Animated Cube Slider</h1>
                      <p>CSS Only</p>
                      <p className="small-cube">best viewed in Firefox</p>
                    </div> */}

                    <div className="slider-cube">
                      <div className="container-cube">
                        <div className="slide x"></div>
                        <div className="slide y"></div>
                        <div className="slide z"></div>
                      </div>
                      <div className="shadow-cube"></div>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Nobalactivity;
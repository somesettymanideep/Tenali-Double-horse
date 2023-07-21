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
           
               <div  ref={this.sectionRef}  className={`activites mb-4 fade-in-section ${isVisible ? 'visible' : ''}`} >
                    <h2 className='title text-center'>Notable Activities</h2>
                    <div className='social-media-actives'>
                        <img src={process.env.PUBLIC_URL + "/assets/img/misc/aha.png"} className="aha" alt="aha"/>
                        <img src={process.env.PUBLIC_URL + "/assets/img/misc/double-horse.png"} className="aha" alt="aha"/>
                        <img src={process.env.PUBLIC_URL + "/assets/img/misc/amma-kuchi.png"} className="aha" alt="aha"/>   
                    </div>
                </div>
          
        );
    }
}

export default Nobalactivity;
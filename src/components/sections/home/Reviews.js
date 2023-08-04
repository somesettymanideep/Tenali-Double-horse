import React from 'react';
import Slider from 'react-slick';
class Reviews extends React.Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  
      return (
        <div className="demo">
          <div className="container">
          <div className="section-title-wrap section-header text-center pt-5">
                        <h5 className="custom-primary">Our Pillars of Success</h5>
                        <h2 className="title">Testimonials that Drive Us</h2>
                        <p className="subtitle">
                        Discover the excellence and delight that our customers can't stop talking about. Experience it for yourself and become one of our satisfied customers today!
                        </p>
                    </div>
            <div className="row">
              <div className="col-md-12">
                <Slider {...settings}>
                  <div className="testimonial">
                    <div className="testimonial-content">
                      <div className="testimonial-icon">
                        <i className="fa fa-quote-left"></i>
                      </div>
                      <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum dolor sit amet eros imperdiet, sit amet hendrerit nisi vehicula.
                      </p>
                    </div>
                    <h3 className="title">williamson</h3>
                    <span className="post">Web Developer</span>
                  </div>
  
                  <div className="testimonial">
                    <div className="testimonial-content">
                      <div className="testimonial-icon">
                        <i className="fa fa-quote-left"></i>
                      </div>
                      <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum dolor sit amet eros imperdiet, sit amet hendrerit nisi vehicula.
                      </p>
                    </div>
                    <h3 className="title">williamson</h3>
                    <span className="post">Web Developer</span>
                  </div>
                  <div className="testimonial">
                    <div className="testimonial-content">
                      <div className="testimonial-icon">
                        <i className="fa fa-quote-left"></i>
                      </div>
                      <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum dolor sit amet eros imperdiet, sit amet hendrerit nisi vehicula.
                      </p>
                    </div>
                    <h3 className="title">williamson</h3>
                    <span className="post">Web Developer</span>
                  </div>
                  <div className="testimonial">
                    <div className="testimonial-content">
                      <div className="testimonial-icon">
                        <i className="fa fa-quote-left"></i>
                      </div>
                      <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum dolor sit amet eros imperdiet, sit amet hendrerit nisi vehicula.
                      </p>
                    </div>
                    <h3 className="title">williamson</h3>
                    <span className="post">Web Developer</span>
                  </div>
  
                </Slider>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Reviews;
  
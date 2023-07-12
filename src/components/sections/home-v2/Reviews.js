import React, { Component } from 'react';
import Slider from 'react-slick';

const videoUrls = [
  "https://www.youtube.com/embed/9UgO7WPugAA",
  "https://www.youtube.com/embed/9UgO7WPugAA",
  "https://www.youtube.com/embed/9UgO7WPugAA",
  // Add more YouTube video URLs here
];

class Reviews extends Component {
  render() {
    const settings = {
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    return (
      <div className="section">
        <div className="container">
          <h2 className="title text-center mb-5">We are also available on</h2>
          <div className="container">
            <Slider className="gallery-slider row" {...settings}>
              {videoUrls.map((url, index) => (
                <div key={index} className="embed-responsive embed-responsive-4by3">
                  <iframe
                    title={`Video ${index + 1}`}
                    width="100%"
                    height="100%"
                    src={url}
                    className="embed-responsive-item"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default Reviews;

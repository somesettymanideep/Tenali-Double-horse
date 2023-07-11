import React, { useEffect } from 'react';
import $ from 'jquery';

const Reviews = () => {
  useEffect(() => {
    
    $('.youtube-carousel').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>',
    });

    // Clean up the carousel on component unmount
    return () => {
      $('.youtube-carousel').slick('unslick');
    };
  }, []);

  return (
    <div className="youtube-carousel">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/video1" title="Video 1"></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/video2" title="Video 2"></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/video3" title="Video 3"></iframe>
     
    </div>
  );
};

export default Reviews;

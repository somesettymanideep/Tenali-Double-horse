import React, { Component } from 'react';


class Meetourteam extends Component {
    render() {
        return (
            <div class="container mb-5 pt-5 pb-3">
                 <h5 className="custom-primary text-center">Where to Find Us</h5>
                                <h2 className="title text-center">Explore Our Operating Locations</h2>
    
    <div class="row">
        <div class="col-md-4 pt-3">
            <div class="box">
            <img src={process.env.PUBLIC_URL + "/assets/img/locations/india.png"}  alt="img" className='shadow-sm   bg-white rounded' />
            <h5 className='text-center mt-4'>India</h5>
            </div>
           
        </div>
        <div class="col-md-4 pt-3">
            <div class="box">
            <img src={process.env.PUBLIC_URL + "/assets/img/locations/usa.png"}  alt="img" className='shadow-sm p-2  bg-white rounded' />
            <h5 className='text-center mt-4'>USA</h5>
           
            </div>
        </div>
        <div class="col-md-4 pt-3">
            <div class="box">
            <img src={process.env.PUBLIC_URL + "/assets/img/locations/uae.png"}  alt="img" className='shadow-sm  p-2 bg-white rounded' /> 
            <h5 className='text-center mt-4'>UAE</h5>
            </div>
        </div>
    </div>
    
</div>
        );
    }
}

export default Meetourteam;
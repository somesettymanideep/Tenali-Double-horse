import React, { Component } from 'react';
import location from '../../../data/restaurant.json';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import MultipleMaps from './Multiplemaps'



const customMarker = L.icon({
    iconUrl: process.env.PUBLIC_URL + "/assets/img/misc/marker.png",
    iconSize: [32, 32],
});

class Content extends Component {
    render() {
        return (
            
            <div className="section">

                <div className="container locations-wrapper">
                    <div className="container">
                        <div className="section-title-wrap text-center mb-5">
                            <h5 className="custom-primary">Let's Chat</h5>
                            <h2 className="title">Contact Us for Any Questions or Business Inquiries</h2>
                            <p className="subtitle">
                                Connect with us for questions, business inquiries & support. Let's chat!
                            </p>
                        </div>
                        <div className="row ">
                            <div className="col-lg-7 mb-lg-30 ">
                                {/* <img src={process.env.PUBLIC_URL + "/assets/img/misc/tenali-double-horse-factory-image.jpeg"}  alt="img" className='shadow-sm p-2  bg-white rounded' /> */}
                                <div className="row row-cols-1 row-cols-md-2 g-4">
                                    <div className="col">
                                        <div className="card-locations mb-4">

                                            <div className="card-body">
                                            <i className='fas fa-industry'  style={{fontSize:'40px',color:' #ED4E53'}}/>
                                                <h5 className="card-title">MAHENDRA DALL MILL</h5>
                                                <p className="card-text content-justify" >P.No.37,47,48,49 & 49A, AutoNagar, Somasundarapalem,
                                                    Kattevaram (Post) – 522 295, TENALI, Guntur Dist, A.P</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card-locations mb-4">

                                            <div className="card-body">
                                            <i className='fas fa-industry'  style={{fontSize:'40px',color:' #ED4E53'}}/>
                                                <h5 className="card-title">MAHARANI DALL MILL</h5>
                                                <p className="card-text content-justify">Plot.No. 38, 39, 40, AutoNagar, Somasundarapalem,
                                                    Kattevaram (Post) – 522 295, TENALI, Guntur Dist, A.P</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card-locations mb-4">

                                            <div className="card-body">
                                            <i className='fas fa-industry'  style={{fontSize:'40px',color:' #ED4E53'}}/>
                                                <h5 className="card-title">MAHADEVA DALL INDUSTRIES PVT LTD</h5>
                                                <p className="card-text content-justify">Nandivelugu,
                                                    Nandivelugu (Post) – 522 306
                                                    TENALI, Guntur Dist, A.P</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card-locations mb-4">

                                            <div className="card-body">
                                            <i className='fas fa-building'  style={{fontSize:'35px',color:' #ED4E53'}}/>
                                                <h5 className="card-title"> CORPORATE ADDRESS</h5>
                                                <p className="card-text content-justify">JK TOWERS, 8-2-293/82/B/S-7, 2nd Floor, Road Number 10C, Gayatri Hills, Jubilee Hills, Hyderabad, Telangana 500033 </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">

                                <form className='mb-5'>
                                    <div className="row">
                                        <div className="form-group col-lg-6">
                                            <input type="text" placeholder="First Name" className="form-control" name="fname" />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <input type="text" placeholder="Last Name" className="form-control" name="lname" />
                                        </div>
                                        <div className="form-group col-lg-12">
                                            <input type="email" placeholder="Email Address" className="form-control" name="email" />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <input type="text" placeholder="Phone no" className="form-control" name="Phonenumber" />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <select className="form-control" name="purpose">
                                                <option value="" disabled selected>Purpose</option>
                                                <option value="export">Export & Import</option>

                                                <option value="distribution">Distribution Enquiry </option>
                                                <option value="Feedback">Feedback</option>
                                                <option value="Other">Other</option>

                                            </select>
                                        </div>
                                        <div className="form-group col-lg-12">
                                            <input type="text" placeholder="Subject" className="form-control" name="subject" />
                                        </div>
                                        <div className="form-group col-lg-12">
                                            <textarea name="message" className="form-control" placeholder="Type your message" rows={7} />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn-custom primary" name="button">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                  
                    <MultipleMaps />
                  
                </div>
            </div>
        );
    }
}

export default Content;
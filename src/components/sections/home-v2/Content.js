import React, { Component, Fragment } from 'react';
import Products from '../home/Products';
import Testimonials from '../home/Testimonials';
import Banner from './Banner';
import Categories from './Categories';
import Newsletter from './Newsletter';
import Offer from './Offer';
import Paragraph  from './Paragraph';
import Process from './Process';
import Partners from './Partners'
// import Reviews from './Reviews';



class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <div className='activites '>
                    <h2 className='title text-center'>Notable Activities</h2>
                    <div className='social-media'>
                        <img src={process.env.PUBLIC_URL + "/assets/img/misc/aha.png"} className="aha" alt="aha"/>
                        <img src={process.env.PUBLIC_URL + "/assets/img/misc/double-horse.png"} className="aha" alt="aha"/>
                        <img src={process.env.PUBLIC_URL + "/assets/img/misc/amma-kuchi.png"} className="aha" alt="aha"/>   
                    </div>
                </div>
                
                <Offer />
                <Process/>
                <Categories className="mb-2" />
                <Paragraph/>
                
                <div className="section pt-0 products-section">
                    <Products />
                </div>
                
                <Partners/>
                {/* <Reviews/> */}
                <Newsletter />
            </Fragment>
        );
    }
}

export default Content;
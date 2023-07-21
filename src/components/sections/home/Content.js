import React, { Component, Fragment } from 'react';
import Socialmedia from './Socialmedia';
import Banner from './Banner';
import Productcards from '../blog-grid/Productcards';
import Stats from './Stats';
import Menuitems from '../home-v2/Categories';
import Aboutcompany from './Aboutcompany';
import Nutrients from './Nutrients';
import Newproduct from './Newproduct';
import Youtubevideo from '../home-v3/Youtubevideo';
import Lazyload from '../home-v3/Lazyload'

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Aboutcompany/>
                {/* <Nutrients/> */}
                {/* <Newproduct/> */}
                <div className='activites mb-4'>
                    <h2 className='title text-center'>Notable Activities</h2>
                    <div className='social-media-actives'>
                        <img src={process.env.PUBLIC_URL + "/assets/img/misc/aha.png"} className="aha" alt="aha"/>
                        <img src={process.env.PUBLIC_URL + "/assets/img/misc/double-horse.png"} className="aha" alt="aha"/>
                        <img src={process.env.PUBLIC_URL + "/assets/img/misc/amma-kuchi.png"} className="aha" alt="aha"/>   
                    </div>
                </div>
                <Menuitems />
               
                <Productcards/>
                <Stats/>
                <Lazyload/>
               
              
               
              <Socialmedia/>
            </Fragment>
        );
    }
}

export default Content;
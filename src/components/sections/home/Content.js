import React, { Component, Fragment } from 'react';
import Socialmedia from './Socialmedia';
import Banner from './Banner';
import Productcards from '../blog-grid/Productcards';
import Stats from './Stats';
import Menuitems from '../home-v2/Categories';
import Aboutcompany from './Aboutcompany';
import Process from '../home-v2/Process';
import Lazyload from '../home-v3/Lazyload';
import Nobalactivity from './Nobalactivity';
import Paragraph from '../home-v2/Paragraph';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Aboutcompany/>
                {/* <Nutrients/> */}
                {/* <Newproduct/> */}
                {/* <div className='activites mb-4'>
                    <h2 className='title text-center'>Notable Activities</h2>
                    <div className='social-media-actives'>
                        <img src={process.env.PUBLIC_URL + "/assets/img/misc/aha.png"} className="aha" alt="aha"/>
                        <img src={process.env.PUBLIC_URL + "/assets/img/misc/double-horse.png"} className="aha" alt="aha"/>
                        <img src={process.env.PUBLIC_URL + "/assets/img/misc/amma-kuchi.png"} className="aha" alt="aha"/>   
                    </div>
                </div> */}
                <Nobalactivity/>

                <Menuitems />
               
                <Process/>
                <Productcards/>
                <Stats/>
                <Paragraph/>
                <Lazyload/>
               
              
               
              <Socialmedia/>
            </Fragment>
        );
    }
}

export default Content;
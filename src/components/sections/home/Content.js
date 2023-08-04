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
import Feedback from './Feedback';
import Reviews from './Reviews'




class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Aboutcompany/>
                <Process/>
              
                <Nobalactivity/>
                
                <Menuitems />
            
                <Productcards/>
                <Stats/>
                <Paragraph/>
                <Lazyload/>
              
               <Reviews/>
              <Socialmedia/>
              <Feedback/>
            </Fragment>
        );
    }
}

export default Content;
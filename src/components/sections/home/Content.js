import React, { Component, Fragment } from 'react';
import Socialmedia from './Socialmedia';
import Banner from './Banner';
import Categories from './Categories';
import Cta from './Cta';
import Instagram from './Instagram';
import Productcards from '../blog-grid/Productcards';
import Stats from './Stats';
import Menuitems from '../home-v2/Categories';
import Aboutcompany from './Aboutcompany';
import Nutrients from './Nutrients';
import Newproduct from './Newproduct';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Nutrients/>
                {/* <Newproduct/> */}
                <Menuitems />
               
                <Productcards/>
                <Cta/>
                <Stats/>
               <Aboutcompany/>
              <Socialmedia/>
            </Fragment>
        );
    }
}

export default Content;
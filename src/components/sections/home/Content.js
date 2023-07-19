import React, { Component, Fragment } from 'react';
import Aboutus from './Aboutus';
import Banner from './Banner';
import Categories from './Categories';
import Cta from './Cta';
import Instagram from './Instagram';
import Productcards from '../blog-grid/Productcards';
import Stats from './Stats';
import Menuitems from '../home-v2/Categories';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Menuitems />
                <Productcards/>
                <Cta/>
                <Stats/>
               
            </Fragment>
        );
    }
}

export default Content;
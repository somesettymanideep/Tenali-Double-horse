import React, { Component, Fragment } from 'react';
import Aboutus from "../home/Aboutus";
import Aboutcompany from '../home/Aboutcompany';

import Newsletter from "../home-v2/Newsletter";
import Stats from '../home/Stats';
import Rules from './Rules';
import MyComponent from './Timelineview';
import Greatplacetowork from '../blog-full/Greatplacetowork'
import Timelineview from './Timelineview';

class Content extends Component {
    render() {
        return (
            <Fragment>
               <Aboutcompany/>
                <Rules/>
                <Greatplacetowork/>
                
                
                
                <Stats/>
               
              
              
                <Timelineview/>
               
                <Newsletter/>
            </Fragment>
        );
    }
}

export default Content;
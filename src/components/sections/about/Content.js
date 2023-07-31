import React, { Component, Fragment } from 'react';
import Aboutus from "../home/Aboutus";
import Aboutcompany from '../home/Aboutcompany';
import Infographics from "../home-v3/Infographics";
import Newsletter from "../home-v2/Newsletter";
import Stats from '../home/Stats';
import Rules from './Rules';
import MyComponent from '../home-v2/MyComponent';

class Content extends Component {
    render() {
        return (
            <Fragment>
               <Aboutcompany/>
                <Rules/>
                {/* <Aboutus /> */}
                
                
                <Stats/>
               
                {/* <div className="enquires">
                    <h1 className="heading">For export enquires mail us</h1>
                    <button className="button-gmail">exports@tenalidoublehorse.com</button>
                </div> */}
              
                <MyComponent/>
                {/* <Teammembers/> */}
                <Newsletter/>
            </Fragment>
        );
    }
}

export default Content;
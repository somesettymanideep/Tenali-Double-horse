import React, { Component, Fragment } from 'react';
import Aboutus from "../home/Aboutus";
import Offer from "../home-v2/Offer";
import Infographics from "../home-v3/Infographics";
import Newsletter from "../home-v2/Newsletter";
import Teammembers from './Teammembers';
import Rules from './Rules';
import MyComponent from '../home-v2/MyComponent';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Offer  style={{ marginBottom: 0 }} />
                <Rules/>
                {/* <Aboutus /> */}
                
                
                
                <Infographics/>
                <div className="enquires">
                    <h1 className="heading">For export enquires mail us</h1>
                    <button className="button-gmail">exports@tenalidoublehorse.com</button>
                </div>
              
                <MyComponent/>
                {/* <Teammembers/> */}
                <Newsletter/>
            </Fragment>
        );
    }
}

export default Content;
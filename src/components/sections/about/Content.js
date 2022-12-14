import React, { Component, Fragment } from 'react';
import Aboutus from "../home/Aboutus";
import Offer from "../home-v2/Offer";
import Infographics from "../home-v3/Infographics";
import Newsletter from "../home-v2/Newsletter";
import Teammembers from './Teammembers';
import Rules from './Rules';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Aboutus />
                <Rules/>
                <Offer/>
                <div className="enquires">
                    <h1 className="heading">For export enquires mail us</h1>
                    <button className="button-gmail">exports@tenalidoublehorse.com</button>
                </div>
                <Infographics/>
                <Teammembers/>
                <Newsletter/>
            </Fragment>
        );
    }
}

export default Content;
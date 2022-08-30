import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headertwo';
import Footer from '../layouts/Footer';
import Content from '../sections/home-v2/Content';

const pagelocation = 'Homepage'

class Hometwo extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Slices - React Template | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <div style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/bg/Tenali-Double-Horse-Background-image.jpg)" }}>
                
                    <Content />
                    <Footer footer={{ style: "ct-footer", logo: "assets/img/tenali-double-horse-logo-135x73.png" }} />
                </div>
            </Fragment>
        );
    }
}

export default Hometwo;
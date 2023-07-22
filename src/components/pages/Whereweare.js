import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerinner';
import Breadcrumbs from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/blog-grid/Content';

const pagelocation = 'Where we are'

class Bloggrid extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Tenali  doublehorse | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags> 
                <Header/>
                <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
                <Content tagId={this.props.match.params.tagId}/>
                <Footer footer={{ style:"ct-footer footer-dark", logo:"assets/img/transparent-logo.png" }} />
            </Fragment>
        );
    }
}

export default Bloggrid;
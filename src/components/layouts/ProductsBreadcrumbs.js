import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductsBreadcrumb extends Component {
    render() {
        return (
            <div className="sub-header-breadcrumbs dark-overlay dark-overlay-2" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/bg/products-banner.jpeg)" }}>
                <div className="container">
                    <div className="subheader-inner">
                        <h1 className='text-light'>{this.props.breadcrumb.pagename}</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item "><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active " aria-current="page">{this.props.breadcrumb.pagename}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductsBreadcrumb;
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import HeaderComponent from '../../helper/Navigationhelper';
import Cartlist from '../layouts/Cartlist';
import Search from '../layouts/Search';
import Mobilemenu from '../layouts/Mobilemenu';
import { animateScroll as scroll } from 'react-scroll';
import Menu from './Menu';
import classNames from 'classnames';
import cartitem from '../../data/cartlist.json';
// import ScrollToTop from 'react-scroll-to-top';

class Header extends HeaderComponent {
    constructor(props) {
        super(props);
        this.state = {
            isSticky: false,
            cartmethod: false,
            isScrolled: false,
            searchmethod: false,
            navmethod: false,
        };
    }

    handleScroll = () => {
        const headerHeight = 100; // You can adjust this value based on your header's height
        const isSticky = window.scrollY > headerHeight;
        // this.setState({ isSticky });
        const isScrolled = window.scrollY > 0; // Check if the user has scrolled (added)
        this.setState({ isSticky, isScrolled })
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    cartToggle = () => {
        this.setState((prevState) => ({
            cartmethod: !prevState.cartmethod,
        }));
    };

    searchToggle = () => {
        this.setState((prevState) => ({
            searchmethod: !prevState.searchmethod,
        }));
    };

    toggleNav = () => {
        this.setState((prevState) => ({
            navmethod: !prevState.navmethod,
        }));
    };

    render() {
        const { isSticky, isScrolled } = this.state;
        const headerClass = classNames('main-header', 'header-1','header-absolute', {
            'header-sticky': isSticky || isScrolled, // Add 'isScrolled' to update the header color initially
        });

        return (
            <Fragment>
                {/* Cart Sidebar Start */}
                <div className="cart-sidebar-wrapper">
                    <aside className={classNames("cart-sidebar", { "cart-open": this.state.cartmethod })}>
                        <div className="cart-sidebar-header">
                            <h3>Your Cart</h3>
                            <div className="close-btn cart-trigger close-dark" onClick={this.cartToggle}>
                                <span />
                                <span />
                            </div>
                        </div>
                        <Cartlist />
                    </aside>
                    <div className="cart-sidebar-overlay cart-trigger" onClick={this.cartToggle} />
                </div>
                {/* Cart Sidebar End */}
                {/* Search Form Start*/}
                <div className={classNames("search-form-wrapper", { "open": this.state.searchmethod })}>
                    <div className="search-trigger close-btn" onClick={this.searchToggle}>
                        <span />
                        <span />
                    </div>
                    <Search />
                </div>
                {/* Search Form End*/}
                {/* Aside (Mobile Navigation) */}
                <aside className={classNames("main-aside", { "open": this.state.navmethod })}>
                    <Mobilemenu />
                </aside>
                <div className="aside-overlay aside-trigger" onClick={this.toggleNav} />
                {/* Header Start */}
                <header className={headerClass} style={{ backgroundColor: isSticky ? 'white' : 'transparent' }}>
                    
                    <div className="container">
                        <nav className="navbar">
                            {/* Logo */}
                            <Link className="navbar-brand" to="/">
                                <img src={process.env.PUBLIC_URL + "/assets/img/tenali-double-horse-logo-250x73.png"} alt="logo" />
                            </Link>
                            {/* Menu */}
                            <Menu />
                            <div className="header-controls">
                                <ul className="header-controls-inner">
                                    {/* <li className="cart-dropdown-wrapper cart-trigger" onClick={this.cartToggle}>
                                        <span className="cart-item-count">{cartitem.length}</span>
                                        <i className="flaticon-shopping-bag" />
                                    </li> */}
                                    {/* <li className="search-dropdown-wrapper search-trigger" onClick={this.searchToggle}>
                                        <i className="flaticon-search" />
                                    </li> */}
                                </ul>
                                {/* Toggler */}
                                <div className="aside-toggler aside-trigger" onClick={this.toggleNav}>
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
                {/* Header End */}
                 {/* Header End */}
                {/* Scroll Top Button */}
                {/* <ScrollToTop smooth color="red!important" /> */}
            </Fragment>
        );
    }
}

export default Header;
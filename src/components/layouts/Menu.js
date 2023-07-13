import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import navigationmenu from '../../data/navigation.json';

class Menu extends Component {
    render() {
        return (
            <ul className="navbar-nav ">
                {navigationmenu.length > 0 ? navigationmenu.slice(0,2).map((item, i) => (
                    <li key={i} className={`menu-item ${item.child ? 'menu-item-has-children' : ''} `} onClick={this.triggerChild}>
                        {item.child ? <Link onClick={e => e.preventDefault()} to="/"> {item.linkText} </Link> : <Link to={item.link}> {item.linkText} </Link>}
                        {item.child ?
                            <ul className="submenu" role="menu">
                                {item.submenu.map((sub_item, i) => (
                                    <li key={i} className={`menu-item ${sub_item.child ? 'menu-item-has-children' : ''} `}>
                                        {sub_item.child ? <Link onClick={e => e.preventDefault()} to="/"> {sub_item.linkText} </Link> : <Link to={sub_item.link}> {sub_item.linkText} </Link>}
                                        {sub_item.submenu ?
                                            <ul className="submenu">
                                                {sub_item.submenu.map((third_item, i) => (
                                                    <li className="menu-item" key={i}><Link
                                                        to={third_item.link}>{third_item.linkText}</Link>
                                                    </li>
                                                ))}
                                            </ul> : null}
                                    </li>
                                ))}
                            </ul>
                            : null
                        }
                    </li>
                )) : null}
                <li className="menu-item menu-item-has-children mega-menu-wrapper">
                    <Link to="/menu-v1">Products</Link>
                    <ul className="submenu">
                        <li>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="mega-menu-item d-flex">
                                            <div className='col-lg-7'>
                                            <h5>New Product</h5>
                                            <p>
                                            Fine-textured semolina used to make traditional South Indian idlis, offering a fluffy and nutritious breakfast option
                      </p>
                                            <a href={"/menu-v1"} className="btn-custom secondary shadow-none btn-sm">Purchase</a>
                                            </div>
                                            <div className='col-lg-3'>
                                            <a href={"/menu-v1"}> <img src={process.env.PUBLIC_URL + "/assets/img/prods-sm/tenali-double-horse-idly-rava-300x300.png"} alt="pizza" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<div className="offset-lg-1 col-lg-3">
                                        <div className="mega-menu-item">
                                            <h5>Menu Pages</h5>
                                            <Link to="/menu-v1">Our Products</Link>
                                            <Link to="/menu-v2">Menu v2</Link>
                                            <Link to="#" className="coming-soon"><span></span> </Link>
                                            <Link to="#" className="coming-soon"><span></span> </Link>
                                        </div>
                    </div>8/}
                                    {/*<div className="col-lg-4">
                                        <div className="mega-menu-item">
                                            <h5>Menu Item Pages</h5>
                                            <Link to="/menu-item-v1/1">Menu Item v1</Link>
                                            <Link to="/menu-item-v2/1">Menu Item v2</Link>
                                            <Link to="#" className="coming-soon"><span></span></Link>
                                        </div>
                    </div>*/}
                                    <div className="col-12 mega-menu-promotion-wrapper">
                                        <div className="row">
                                        <div className="col-3">
                                                <div className="mega-menu-promotion">
                                                    <a href={"/menu-v1"}><img src={process.env.PUBLIC_URL + "/assets/img/prods-sm/tenali-double-horse-idly-rava-300x300.png"} alt="pizza" /></a>
                                                    <div className="mega-menu-promotion-text">
                                                        <h4><a href={"/menu-v1"}>Idly Rava</a></h4>
                                                        <span>₹184</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="mega-menu-promotion">
                                                    <a href={"/menu-v1"}><img src={process.env.PUBLIC_URL + "/assets/img/prods-sm/Tenali-Double-Horse-Urad-Gota-300x300.png"} alt="pizza" /></a>
                                                    <div className="mega-menu-promotion-text">
                                                        <h4><a href={"/menu-v1"}>Urad Gota</a></h4>
                                                        <span>₹165</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="mega-menu-promotion">
                                                    <a href={"/menu-v1"}><img src={process.env.PUBLIC_URL + "/assets/img/prods-sm/Tenali-Double-horse-Moong-Dal-300x300.png"} alt="pizza" /></a>
                                                    <div className="mega-menu-promotion-text">
                                                        <h4><a href={"/menu-v1"}>Moong Dall </a></h4>
                                                        <span>₹152</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="mega-menu-promotion">
                                                    <a href={"/menu-v1"}><img src={process.env.PUBLIC_URL + "/assets/img/prods-sm/Tenali-Double-Horse-Toor-Dall-300x300.png"} alt="pizza" /></a>
                                                    <div className="mega-menu-promotion-text">
                                                        <h4><a href={"/menu-v1"}>Toor Dall</a></h4>
                                                        <span>₹150</span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
                {navigationmenu.length > 0 ? navigationmenu.slice(4, 10).map((item, i) => (
                    <li key={i} className={`menu-item ${item.child ? 'menu-item-has-children' : ''} `} onClick={this.triggerChild}>
                        {item.child ? <Link onClick={e => e.preventDefault()} to="/"> {item.linkText} </Link> : <Link to={item.link}> {item.linkText} </Link>}
                        {item.child ?
                            <ul className="sub-menu" role="menu">
                                {item.submenu.map((sub_item, i) => (
                                    <li key={i} className={`menu-item ${sub_item.child ? 'menu-item-has-children' : ''} `}>
                                        {sub_item.child ? <Link onClick={e => e.preventDefault()} to="/"> {sub_item.linkText} </Link> : <Link to={sub_item.link}> {sub_item.linkText} </Link>}
                                        {sub_item.submenu ?
                                            <ul className="sub-menu">
                                                {sub_item.submenu.map((third_item, i) => (
                                                    <li className="menu-item" key={i}><Link
                                                        to={third_item.link}>{third_item.linkText}</Link>
                                                    </li>
                                                ))}
                                            </ul> : null}
                                    </li>
                                ))}
                            </ul>
                            : null
                        }
                    </li>
                )) : null}
            </ul>

        );
    }
}

export default Menu;
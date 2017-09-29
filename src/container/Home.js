import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import homeHeader from '../img/book.jpg';
import tableWare from '../img/home/tableware.jpg';
import art from '../img/home/art.jpg';
import home from '../img/home/home.jpg';

export default class Home extends Component {
    render() {
        return (
            <div>
                <header className="masthead hero">
                    <div className="container">
                        <div className="intro-text">
                            <span className="name elegantshadow ">Canvas</span>
                            <span className="skills">Modern & Contemporary Furniture</span>
                        </div>
                    </div>
                </header>




                <section className="bg-light" id="portfolio">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading">Shop</h2>

                            </div>
                        </div>




                        <div className="row">
                            <div className="col-md-4 col-sm-6 portfolio-item">
                                <NavLink className="portfolio-link" to="/homeware">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content">
                                            <i className="fa fa-angle-double-up fa-3x"></i>
                                        </div>
                                    </div>
                                    <img src={home} alt="boohoo" className="img-fluid" />
                                </NavLink>

                                <div className="portfolio-caption">
                                    <NavLink className="nav-link" to="/homeware">
                                        <h4>Threads</h4>
                                        <p className="text-muted">Home Furnishing</p>
                                    </NavLink>
                                </div>
                            </div>





                            <div className="col-md-4 col-sm-6 portfolio-item">
                                <NavLink className="portfolio-link" to="/art">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content">
                                            <i className="fa fa-angle-double-up fa-3x"></i>
                                        </div>
                                    </div>
                                    <img src={art} alt="boohoo" className="img-fluid" />
                                </NavLink>
                                <div className="portfolio-caption">
                                    <NavLink className="nav-link" to="/homeware">
                                        <h4>Adornment</h4>
                                        <p className="text-muted">Art & Accessories</p>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 portfolio-item">
                                <NavLink className="portfolio-link" to="/tableware">                                    <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fa fa-angle-double-up fa-3x"></i>
                                    </div>
                                </div>

                                    <img src={tableWare} alt="boohoo" className="img-fluid" />
                                </NavLink>
                                <div className="portfolio-caption">
                                    <NavLink className="nav-link" to="/tableware">

                                        <h4>Palette</h4>
                                        <p className="text-muted">Kitchen & Dining</p>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

            </div>

        )
    }
}

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import tableWare from '../img/home/tableware.jpg';
import art from '../img/home/art.jpg';
import home from '../img/home/home.jpg';

export default class Home extends Component {
    render() {
        return (
            <div>
                <header className="masthead hero">
                    <div className="container">
                        <div className="intro-text elegantshadow">
                            <span className="name">Canvas</span>
                            <span className="skills">Contemporary Furniture</span>
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
                                    <img src={home} alt="home" className="img-fluid" />
                                </NavLink>

                                <div className="portfolio-caption">
                                    <NavLink className="nav-link" to="/homeware">
                                        <h4>Home Furnishing</h4>
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
                                    <img src={art} alt="art" className="img-fluid" />
                                </NavLink>
                                <div className="portfolio-caption">
                                    <NavLink className="nav-link" to="/homeware">
                                        <h4>Art & Accessories</h4>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 portfolio-item">
                                <NavLink className="portfolio-link" to="/tableware">                                    <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fa fa-angle-double-up fa-3x"></i>
                                    </div>
                                </div>

                                    <img src={tableWare} alt="tableware" className="img-fluid" />
                                </NavLink>
                                <div className="portfolio-caption">
                                    <NavLink className="nav-link" to="/tableware">
                                        <h4>Kitchen & Dining</h4>
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

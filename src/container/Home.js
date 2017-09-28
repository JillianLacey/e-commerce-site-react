import React, { Component } from 'react';
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
                            <span className="name">Canvas</span>
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
                                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content">
                                            <i className="fa fa-plus fa-3x"></i>
                                        </div>
                                    </div>

                                    <img src={home} alt="boohoo" className="img-fluid" />
                                </a>
                                <div className="portfolio-caption">
                                    <h4>Threads</h4>
                                    <p className="text-muted">Home Furnishing</p>
                                </div>
                            </div>





                            <div className="col-md-4 col-sm-6 portfolio-item">
                                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content">
                                            <i className="fa fa-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img src={art} alt="boohoo" className="img-fluid" />
                                </a>
                                <div className="portfolio-caption">
                                    <h4>Wall Adornment</h4>
                                    <p className="text-muted">Prints & Sculpture</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 portfolio-item">
                                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content">
                                            <i className="fa fa-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img src={tableWare} alt="boohoo" className="img-fluid" />
                                </a>
                                <div className="portfolio-caption">
                                    <h4>Explore</h4>
                                    <p className="text-muted">Kitchen & Dining</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

            </div>

        )
    }
}

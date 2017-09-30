import React, { Component } from 'react';
import Image1 from '../img/about/1.jpg';
import Image2 from '../img/about/2.jpg';
import Image3 from '../img/about/3.jpg';
import Image4 from '../img/about/4.jpg';



export default class About extends Component {
    render() {
        return (

            <section id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading">Our Beginnings</h2><br />

                        </div>
                    </div><br />
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="timeline">
                                <li>
                                    <div className="timeline-image">
                                        <img className="rounded-circle img-fluid" src={Image1} />
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>2011</h4>
                                            <h4 className="subheading">It all began with an idea.</h4>
                                        </div>

                                    </div>
                                </li>
                                <li className="timeline-inverted">
                                    <div className="timeline-image">
                                        <img className="rounded-circle img-fluid" src={Image2} />
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>June 2012</h4>
                                            <h4 className="subheading">An Agency is Born.</h4>
                                        </div>

                                    </div>
                                </li>
                                <li>
                                    <div className="timeline-image">

                                        <img className="rounded-circle img-fluid" src={Image3} />

                                    </div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>January 2014</h4>
                                            <h4 className="subheading">Transition to Full Service</h4>
                                        </div>
                                    </div>
                                </li>

                                <li className="timeline-inverted">
                                    <div className="timeline-image">
                                        <h4>Be Part
                              <br />Of Our
                              <br />Story!</h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>






        )
    }
}

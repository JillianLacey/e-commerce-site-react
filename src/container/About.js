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
                                            <h4>2011 - Canvas Is Born</h4>
                                            <h4 className="subheading">Canvas is a curator of design, taste and style in the luxury lifestyle market, offering furniture, lighting, textiles, rugs, bathware, and other décor.</h4>
                                        </div>

                                    </div>
                                </li>
                                <li className="timeline-inverted">
                                    <div className="timeline-image">
                                        <img className="rounded-circle img-fluid" src={Image2} />
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>2012 - New Locations Added</h4>
                                            <h4 className="subheading">Our collections of timeless, updated classics and authentic reproductions provide a unique point of view and an unmatched combination of inspired design and unparalleled quality. </h4>
                                        </div>

                                    </div>
                                </li>
                                <li>
                                    <div className="timeline-image">

                                        <img className="rounded-circle img-fluid" src={Image3} />

                                    </div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>2014 - Product Line Expands</h4>
                                            <h4 className="subheading">Each season brings a wealth of new ideas and we begin to sell outdoor, as well as baby & child and teen products.</h4>
                                        </div>
                                    </div>
                                </li>

                                <li className="timeline-inverted">
                                    <div className="timeline-image">
                                        <h4>Come
                              <br />See Us
                              <br />Soon!</h4>
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

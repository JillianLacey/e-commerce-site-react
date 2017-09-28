import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class Header extends Component {
    render() {
        return (

            <nav className="navbar navbar-toggleable-md navbar-light bg-faded fixedtotop">
                <button
                    style={{ top: "1rem" }}
                    className="navbar-toggler navbar-toggler-left"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <NavLink
                    style={{ alignSelf: "center" }}
                    className="navbar-brand"
                    to="/"
                >
                    Canvas
            </NavLink>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">
                                Home <span className="sr-only">(current)</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-toggle="collapse"
                                data-target="#storeCollapse"
                            >
                                Shop<span className="fa fa-caret-down" aria-hidden="true" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                About
                  </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">
                                Contact Us
                             </NavLink>
                        </li>
                    </ul>
                </div>

            </nav>
        )
    }

}






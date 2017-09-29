import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
export default class SubHeader extends Component {
    render() {
        return (
            <div className="collapse storeCollapse" id="storeCollapse">
                <nav style={{ backgroundColor: 'rgba(51, 51, 51, .9)' }} className="navbar navbar-toggleable-md navbar-light">
                    <div className="" id="navbarNav">
                        <ul style={{ color: '#fff' }} className="navbar-nav">
                            <li className="nav-item active">
                                <NavLink className="nav-link secNavLink" exact to="/art">Art</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link secNavLink" to="/tableware">Kitchen & Dining</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link secNavLink" to="/homeware">Homeware</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

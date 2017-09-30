import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
export default class SubHeader extends Component {
    render() {
        return (
            <div className="collapse storeCollapse" id="storeCollapse">
                <nav style={{ backgroundColor: 'rgba(136, 92, 39, 0.51)' }} className="navbar navbar-toggleable-md navbar-light">
                    <div className="" id="navbarNav">
                        <ul style={{ color: '#fff' }} className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/homeware">Homeware</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/art">Art & Accessories</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/tableware">Kitchen & Dining</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

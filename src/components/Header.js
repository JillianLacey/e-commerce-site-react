import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
    navStyle: { top: 0, display: "flex", width: "100%", justifyContent: "space-around", paddingTop: 20, marginBottom: 50 },
    listStyle: {},
    linkStyle: {
        textDecoration: "none",
        border: "2px solid pink",
        color: "green",
        fontWeight: "bold",
        padding: 5,
    },
    activeStyle: {
        backgroundColor: "magenta",
        color: "white"
    }
}

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav style={styles.navStyle} >
                    <NavLink exact to="/" style={styles.linkStyle} activeStyle={styles.activeStyle}>Home</NavLink>
                    <NavLink to="/gifts" style={styles.linkStyle} activeStyle={styles.activeStyle}>Gifts</NavLink>
                    <NavLink to="/art" style={styles.linkStyle} activeStyle={styles.activeStyle}>Art</NavLink>
                    <NavLink to="/homeware" style={styles.linkStyle} activeStyle={styles.activeStyle}>Homeware</NavLink>
                    <NavLink to="/contact" style={styles.linkStyle} activeStyle={styles.activeStyle}>Contact Us</NavLink>
                    <NavLink to="/about" style={styles.linkStyle} activeStyle={styles.activeStyle}>About</NavLink>
                </nav>
            </div>
        )
    }

}
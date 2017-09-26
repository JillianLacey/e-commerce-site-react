import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';
import artData from "../data/art.js";


export default class HomeWare extends Component {
    render() {
        let match = this.props.match;
        console.log(artData);
        let Art = artData.map((artData) => {
            return (
                <div key={artData.id}>
                    <NavLink activeClassName="selected" className="navlink" to={`${match.url}/${artData.id}`}>
                        <p>{artData.productTitle}</p>
                        <img src={artData.productImg} />
                    </NavLink>
                    <p>{artData.productDescription}</p>
                    <p>{artData.price}</p>
                </div>
            )
        });

        return (
            <div>
                <Link className="btn btn-large btn-primary" to="/">Back To Home</Link>
                {Art}
            </div>

        );
    }
}
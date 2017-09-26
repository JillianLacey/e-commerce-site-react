import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';
import homeWareData from "../data/homeware.js";


export default class HomeWare extends Component {
    render() {
        let match = this.props.match;
        console.log(homeWareData);
        let HomeWares = homeWareData.map((homeWareData) => {
            return (
                <div key={homeWareData.id}>
                    <NavLink activeClassName="selected" className="navlink" to={`${match.url}/${homeWareData.id}`}>
                        <p>{homeWareData.productTitle}</p>
                        <img src={homeWareData.productImg} />
                    </NavLink>
                    <p>{homeWareData.productDescription}</p>
                    <p>{homeWareData.price}</p>
                </div>
            )
        });

        return (
            <div>
                <Link className="btn btn-large btn-primary" to="/">Back To Home</Link>
                {HomeWares}
            </div>

        );
    }
}
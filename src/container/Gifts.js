import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';
import giftsData from "../data/gifts.js";


export default class Gifts extends Component {
    render() {
        let match = this.props.match;
        console.log(giftsData);
        let Gifts = giftsData.map((giftsData) => {
            return (
                <div key={giftsData.id}>
                    <NavLink activeClassName="selected" className="navlink" to={`${match.url}/${giftsData.id}`}>
                        <p>{giftsData.productTitle}</p>
                        <img src={giftsData.productImg} />
                    </NavLink>
                    <p>{giftsData.productDescription}</p>
                    <p>{giftsData.price}</p>
                </div>
            )
        });

        return (
            <div>
                <Link className="btn btn-large btn-primary" to="/">Back To Home</Link>
                {Gifts}
            </div>

        );
    }
}
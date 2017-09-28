import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';
import productData from "../data/productData.js";


export default class ProductLine extends Component {
    render() {
        let { productline } = this.props.match.params;
        let productLineData = productData[productline];

        let products = productLineData.map((product) => {
            return (
                <div key={product.id}>
                    <NavLink activeClassName="selected" className="navlink" to={`${productline}/${product.id}`}>
                        <p>{product.productTitle}</p>
                        <img src={product.productImg} alt={product.productTitle} />
                    </NavLink>
                    <p>{product.productDescription}</p>
                    <p>{product.price}</p>
                </div>
            )
        });

        return (
            <div>
                <Link className="btn btn-large btn-primary" to="/">Back To Home</Link>
                {products}
            </div>

        );
    }
}
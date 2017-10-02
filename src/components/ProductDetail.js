import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import productData from "../data/productData.js";
// import _ from "lodash";

export default class ProductDetail extends Component {
    render() {
        const { id, productline } = this.props.match.params;
        let product = productData[productline].find(item => item.id == id)

        return (
            <div className="container">
                <div className="row details-row">

                    <div className="col-lg-6 col-sm-6">
                        <img className="full-size-img" src={product.fullSizeImg} />
                    </div>

                    <div className="col-lg-4">
                        <h3 >{product.productTitle}</h3>
                        <p>{product.productDescription}</p>
                        <h3 className="my-3">Product Details</h3>
                        <p>{product.price}</p>

                        <Link className="btn btn-large btn-danger" to="/">Add to Cart</Link>
                    </div>

                </div>
            </div>


        )
    }
}

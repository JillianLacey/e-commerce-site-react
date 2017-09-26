import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import giftsData from "../data/gifts.js";
import _ from "lodash";
import Gifts from '../container/Gifts';






export default class GiftDetails extends Component {
    componentWillMount() {
        // axios.get("/actors?firstName=" + this.props.match.params.actor)
    }

    render() {
        console.log(this.props);
        //accessing the name of the actor from the match object using params and the ":actor" endpoint
        const { id } = this.props.match.params;

        let foundGift = _.find(giftsData, (item) => item.id === id)

        return (
            <div>
                <Link className="btn btn-large btn-danger" to="/">Back To Home</Link>
                <p>{foundGift}</p>
            </div>
        )
    }
}

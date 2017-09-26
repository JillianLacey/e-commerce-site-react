import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import homeWareData from "../data/homeware.js";
import _ from "lodash";
import HomeWare from '../container/HomeWare';



export default class HomeWareDetails extends Component {
    componentWillMount() {
        // axios.get("/actors?firstName=" + this.props.match.params.actor)
    }

    render() {
        console.log(this.props);
        //accessing the name of the actor from the match object using params and the ":actor" endpoint
        const { id } = this.props.match.params;

        let foundHomeWare = _.find(homeWareData, (item) => item.id === id)

        return (
            <div>
                <Link className="btn btn-large btn-danger" to="/">Back To Home</Link>
                <p>{foundHomeWare}</p>
            </div>
        )
    }
}

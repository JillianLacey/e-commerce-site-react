import React, { Component } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import SubHeader from '../components/SubHeader';

export default class BaseLayout extends Component {
    render() {
        return (
            <div>
                <Header />
                <SubHeader />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

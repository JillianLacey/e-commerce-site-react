import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/App.css';
import BaseLayout from './container/BaseLayout';
import Home from './container/Home';
import About from './container/About';
import Contact from './container/Contact';

import Gifts from './container/Gifts';
import Art from './container/Art';
import HomeWare from './container/HomeWare';

import GiftDetails from './components/GiftDetails';
import HomeWareDetails from './components/HomeWareDetails';
import ArtDetails from './components/ArtDetails';



class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <BaseLayout>
          <Switch>
            <Route path="/gifts/:id" component={GiftDetails} />
            <Route path="/gifts" component={Gifts} />
            <Route path="/art/:id" component={ArtDetails} />
            <Route path="/art" component={Art} />
            <Route path="/homeware/:id" component={HomeWareDetails} />
            <Route path="/homeware" component={HomeWare} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    );
  }
}

export default App;

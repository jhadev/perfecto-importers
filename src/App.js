import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './Main';
import Titlebar from './components/Titlebar';
import Landing from './components/Landing';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Titlebar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/winecart" component={Main} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

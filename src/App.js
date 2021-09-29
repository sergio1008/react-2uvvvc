import React from 'react';
import './style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';

import Home from './pages/home/Home';
import About from './pages/about/About';
export default class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <Switch>
          <Route path="/">
              <Home/>
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

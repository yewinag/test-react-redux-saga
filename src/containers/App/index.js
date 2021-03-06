import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import ApplicationBar from '../../components/ApplicationBar';
import HomePage from '../HomePage';
import WorkPage from '../WorkPage';
import WorkDetailPage from '../WorkDetailPage';

import './app.scss'; 
class App extends Component {
  render() { 
    return (
      <div className="application">
        <Router>
          <ApplicationBar />        
          <Switch>
            <Route path="/" exact component={WorkPage} />          
            <Route path="/work/" exact component={WorkPage} />          
            <Route path="/work/:slug" component={WorkDetailPage} />          
            <Route path="*" component={WorkPage} />          
          </Switch>              
        </Router>
      </div>
    );
  }
}
 
export default App;
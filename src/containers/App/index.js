import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ApplicationBar from '../../components/ApplicationBar';
import HomePage from '../HomePage';
import WorkPage from '../WorkPage';
 
class App extends Component {
  render() { 
    return (
      <div className="application">
        <Router>
          <ApplicationBar />        
          <Switch>
            <Route path="/" exact component={HomePage} />          
            <Route path="/work" component={WorkPage} />          
          </Switch>              
        </Router>
      </div>
    );
  }
}
 
export default App;
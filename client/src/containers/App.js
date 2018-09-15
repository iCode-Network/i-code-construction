import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ConstructionContainer from './ConstructionContainer';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <Route exact path='/' component={ConstructionContainer}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default connect()(App);

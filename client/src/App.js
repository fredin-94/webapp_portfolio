import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {Container} from 'reactstrap';
import './App.css';
import MyNavbar from './components/navbar.js';
import HomePage from './components/homePage.js';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          
          <Container>
            <HomePage/>
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;

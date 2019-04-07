import React, { Component } from 'react';
//import {Provider} from 'react-redux';
import {Container} from 'reactstrap';
import './App.css';
import MyNavbar from './components/navbar.js';
import Homepage from './components/homePage.js';

class App extends Component {
  render() {
    return (
      //<Provider>
        <div className="App">
          <MyNavbar/>
          <Container>
            <Homepage/>
          </Container>
        </div>
      //</Provider>
    );
  }
}

export default App;
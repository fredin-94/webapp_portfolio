import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {Container} from 'reactstrap';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import store from "./store/store.js";
import './App.css';
import './styles/mainStyle.css';
import MyNavbar from './components/navbar.js';
import Footer from './components/footer.js';
import Homepage from './components/homePage.js';
import ImagesPage from './components/imagesPage.js';
import PostsPage from './components/postsPage.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        
          <div className="App">
              <MyNavbar/>
              <Container>
              <Provider store = {store}>
                  <Switch> 
                    <Route exact path='/' component={Homepage}/>
                    <Route path='/images' component={ImagesPage}/>
                    <Route path='/posts' component={PostsPage}/>
                  </Switch>
                </Provider>
              </Container>
              <Footer/>
          </div>
        
      </BrowserRouter>
      
    
    );
  }
}

export default App;
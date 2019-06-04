import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {Container} from 'reactstrap';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import store from "../store/store.js";

import Homepage from './Homepage.js';
import ImagesPage from './ImagesPage.js';
import PostsPage from './PostsPage.js';
import Projects from './Projects.js';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        
          <div className="App">
                <Provider store = {store}>
                  <Switch> 
                    <Route exact path='/' component={Homepage}/>
                    <Route path='/images' component={ImagesPage}/>
                    <Route path='/posts' component={PostsPage}/>
                    <Route path='/projects' component={Projects}/>
                  </Switch>
                </Provider>
          </div>
        
      </BrowserRouter>
      
    
    );
  }
}

export default App;
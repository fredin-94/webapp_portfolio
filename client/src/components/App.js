import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {Container} from 'reactstrap';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import store from "../store/store.js";

import Homepage from './Homepage.js';
import ImagesPage from './ImagesPage.js';
import PostsPage from './PostsPage.js';
import Projects from './Projects.js';

/*making a comment so i can use this to test another thing...*/
/*
block comment
*/
//one line comment
class App extends Component {
  /*another testing comment*/
  render() {  /*comment after some text*/
    return ( /*comment after some text no tab*/
      <BrowserRouter> //one line comment...
          /*
          block comment
          */
          <div className="App">   //one line comment with tab
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

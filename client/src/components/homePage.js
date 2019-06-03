import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import axios from 'axios';

import GitHub from 'react-icons/lib/fa/github-square';
import GitLab from 'react-icons/lib/fa/gitlab';
import LinkedIn from 'react-icons/lib/fa/linkedin';

import Thumbnail from './Thumbnail';

class Homepage extends Component{

    state = { title: 'hello', errorMsg: '', images: [] };

    //Lifecycle methods (some of them):
    componentDidMount = () => {
        //main for data loading
        axios.get('/api/images')
        .then((res)=>{
            console.log("got a response");            
            this.setState({images: res.data});
            console.log("data: " + res.imgurl +" res: " + JSON.stringify(res));
            console.log("images found: " + this.state.images.length);            
        })
        .catch((err)=>{
            console.log("got an error");
        });

        axios.get('https://dog.ceo/api/breeds/image/random')
        .then(response => {
          console.log("got a DOG"+ JSON.stringify(response.data));
        })
        .catch(error => {
          console.log(error);
        });
    }
    
    componentDidUpdate = () => { 
        //tex when set state is called or we get new props this will run
    }

    renderSideText = () => {
        if(this.state.title === 'hello'){
            return(
                <p className="sideText"> 
                    &lt;h1 frontEnd="ReactJS Redux VueJS D3JS JQuery HTML5 CSS3"> <br/>
                    &lt;h2 backEnd="NodeJS .net MongoDB SQL"> <br/>
                    &lt;h3 softwareEngineering="UX RestAPI MVC Git Docker Heroku"> <br/>
                    &lt;h4 generalProgramming="Java JavaScript C C++ C#"> <br/>
                </p> 
            );
        }
    }
    
    render(){
        return(
            <div className="homepage">
                <div className="outterContainer">
                    <Row>
                        <Col xs="2">
                                {this.renderSideText()}
                        </Col>
                        <Col xs="7">
                            <div className="mainArea">
                                <h1>Lucas Fredin</h1>
                                <h3>Software Engineer and Fullstack developer with a passion for everything web-dev</h3>
                                <p>phonenumber icon: 098542-3424</p>
                                <p>email icon: lkgjfdlks@kjshf.com</p>
                                <hr/>
                                <GitHub />
                                <GitLab />
                                <LinkedIn />
                            </div>
                        </Col>
                        <Col xs="3">
                            <div className="redLine">
                                <div className="linksArea">
                                    <ul className="linksList">
                                        <li><a href="/images">About me____    </a> </li>
                                        <li><a href="/posts">My blog____    </a> </li>
                                        <li><a href="/projects">My dev projects____    </a> </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                
                <div class="img-content">
                    <h2>Most recent work</h2>
                    <hr/>
                    <Thumbnail images={this.state.images}/>
                    <a href="/images">See more</a>
                </div>
            </div>
        );
    }
}

export default Homepage;
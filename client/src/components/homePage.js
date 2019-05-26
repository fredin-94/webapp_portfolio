import React, {Component} from 'react';
import {Row, Col } from 'reactstrap';
import GitHub from 'react-icons/lib/fa/github-square';
import GitLab from 'react-icons/lib/fa/gitlab';
import LinkedIn from 'react-icons/lib/fa/linkedin';

class Homepage extends Component{
    render(){
        return(
            <div>
                <div className="outterContainer">
                    <Row>
                        <Col xs="2">
                            <p className="sideText"> 
                                &lt;h1 frontEnd="ReactJS Redux VueJS D3JS JQuery HTML5 CSS3"> <br/>
                                &lt;h2 backEnd="NodeJS .net MongoDB SQL"> <br/>
                                &lt;h3 softwareEngineering="UX RestAPI MVC Git Docker Heroku"> <br/>
                                &lt;h4 generalProgramming="Java JavaScript C C++ C#"> <br/>
                            </p> 
                        </Col>
                        <Col xs="7">
                            <div className="mainArea">
                                <h1 className="headText backText">Lucas</h1>
                                <h1 className="headText frontText">Fredin</h1>
                                <h3 className="contentText">Insert some text here about me or what i can do or about this website or quote or something, ya know, like adults do!</h3>
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
                
                <Row>
                    <Col xs="4"> <img src="https://media.moddb.com/images/engines/1/1/984/img-placeholder.2.jpg" alt="projects"/> </Col>
                    <Col xs="4"> <img src="https://media.moddb.com/images/engines/1/1/984/img-placeholder.2.jpg" alt="projects"/> </Col>
                    <Col xs="4"> <img src="https://media.moddb.com/images/engines/1/1/984/img-placeholder.2.jpg" alt="projects"/> </Col>
                </Row>
                <Row>
                    <Col xs="4"> <img src="https://media.moddb.com/images/engines/1/1/984/img-placeholder.2.jpg" alt="projects"/> </Col>
                    <Col xs="4"> <img src="https://media.moddb.com/images/engines/1/1/984/img-placeholder.2.jpg" alt="projects"/> </Col>
                    <Col xs="4"> <img src="https://media.moddb.com/images/engines/1/1/984/img-placeholder.2.jpg" alt="projects"/> </Col>
                </Row>
            </div>
        );
    }
}

export default Homepage;
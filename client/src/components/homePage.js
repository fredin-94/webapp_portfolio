import React, {Component} from 'react';
import {Row, Col } from 'reactstrap';
import GitHub from 'react-icons/lib/fa/github-square';
import GitLab from 'react-icons/lib/fa/gitlab';
import LinkedIn from 'react-icons/lib/fa/linkedin';

class Homepage extends Component{
    render(){
        return(
            <div class="outterContainer">
                <Row>
                    <Col>
                        <p class="sideText"> 
                            &lt;h1 frontEnd="ReactJS Redux VueJS D3JS JQuery HTML5 CSS3"> <br/>
                            &lt;h2 backEnd="NodeJS .net MongoDB SQL"> <br/>
                            &lt;h3 softwareEngineering="UX RestAPI MVC Git Docker Heroku"> <br/>
                            &lt;h4 generalProgramming="Java JavaScript C C++ C#"> <br/>
                        </p> 
                    </Col>
                    <Col clss="mainArea">
                        <h1 className="headText backText">Lucas</h1>
                        <h1 className="headText frontText">Fredin</h1>
                        <h3 className="contentText">Insert some text here about me or what i can do or about this website or quote or something, ya know, like adults do!</h3>
                        <GitHub />
                        <GitLab />
                        <LinkedIn />
                    </Col>
                    <Col class="rightArea">
                        <div class="redLine"></div>
                        <ul>
                            <li><a href="/images">About me</a> </li>
                            <li><a href="/posts">My blog</a> </li>
                            <li><a href="/projects">My dev projects</a> </li>
                        </ul>
                    </Col>
                </Row>
            </div>
);
    }
}

export default Homepage;
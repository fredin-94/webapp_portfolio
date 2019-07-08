import React, {Component} from 'react';
import {Row, Col, Container} from 'reactstrap';
import axios from 'axios';

import GitHub from 'react-icons/lib/fa/github-square';
import GitLab from 'react-icons/lib/fa/gitlab';
import LinkedIn from 'react-icons/lib/fa/linkedin';
import Phone from 'react-icons/lib/fa/phone';
import Email from 'react-icons/lib/fa/at';

import Thumbnail from './Thumbnail';
import Testimonials from './Testimonials';
import ContentArea from './ContentArea';

class Homepage extends Component{

    state = { 
        title: 'hello', 
        errorMsg: '', 
        images: [],
        testimonials: [] 
    };

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
                <Container>
                    <div class="welcome">
                        <div className="outterContainer">
                            <Row>
                                <Col xs="2">
                                    <div class="left-border">
                                        {this.renderSideText()}
                                    </div>
                                </Col>
                                <Col xs="7">
                                    <div className="mainArea">
                                        <h1>Lucas Fredin</h1>
                                        <h3>Software Engineer and Fullstack developer with a passion for everything web-dev</h3>
                                        
                                        <div className="contactInfo">
                                            <Phone className="icon" size={15}/>
                                            098-542-3424
                                            <p>   </p>
                                            <Email className="icon" size={15}/>
                                            l.fredin@mail.com
                                        </div>
                                        
                                        <hr/>

                                        <div class="iconBar">
                                            <a href="/"><GitHub size={40}/></a>
                                            <a href="/"><GitLab size={40}/></a>
                                            <a href="/"><LinkedIn size={40}/></a>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs="3">
                                    <div className="redLine">
                                        <div className="linksArea">
                                            <ul className="linksList">
                                                <li><a href="/images">About me____    </a> </li>
                                                <li><a href="/posts">My blog____    </a> </li>
                                                <li><a href="/projects">My dev projects____      </a> </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>    

                <ContentArea title="Most recent work ">
                    <Thumbnail images={this.state.images}/>
                    <a href="/images">See more</a>
                </ContentArea>

                <ContentArea title="Testimonials "> {/*show only if testimonials exist*/}
                    <Testimonials/>
                </ContentArea>
                        
                 <ContentArea contentColor="white" backgroundColor="red" title="About Me ">
                    <h4>Education:</h4>
                        <p>I graduated the SEM program at GU year 2020, yeee</p>
                        <p>Then in my future i graduate from some nice masters program, plz</p>
                    <h4>Experiences:</h4>
                        <p>I went to japan and learned shit</p>
                        <p>I have worked with some stuff, you know</p>
                    <h4>Stuff I like:</h4>
                        <p>not embedded systems at least!</p>
                    <h4>Specializations:</h4>
                        <p>webdev stuff, kuwashiku ha nai kedo...</p>
                    
                 </ContentArea>

            </div>
        );
    }
}

export default Homepage;
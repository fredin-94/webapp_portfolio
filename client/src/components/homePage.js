import React, {Component} from 'react';
import { Button } from 'reactstrap';

class Homepage extends Component{
    render(){
        return(
            <div>
                <div class="innerContainer">
                    <h1 className="headText backText">Lucas</h1>
                    <h1 className="headText frontText">Fredin</h1>
                    <h3 className="contentText">Insert some text here about me or what i can do or about this website or quote or something, ya know, like adults do!</h3>
                </div>
                <div>
                    <a href="/images">My art</a> 
                    <a href="/posts">My blog</a> 
                    <a href="/projects">My dev projects</a> 
                </div>
                
                <Button color="primary">primary</Button>{' '}
            </div>
        );
    }
}

export default Homepage;
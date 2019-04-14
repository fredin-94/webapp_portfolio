import React, {Component} from 'react';
import { Button } from 'reactstrap';

class Homepage extends Component{
    render(){
        return(
            <div>
                <h1 className="headText backText">Lucas</h1>
                <h1 className="headText frontText">Fredin</h1>
                <h2>Insert some text here about me or what i can do or about this website or quote or something, ya know, like adults do!</h2>
                
                <Button color="primary">primary</Button>{' '}
            </div>
        );
    }
}

export default Homepage;
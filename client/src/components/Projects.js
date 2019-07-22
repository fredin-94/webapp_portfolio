import React, {Component} from 'react';
import axios from 'axios';

import ListProjects from './ListProjects';
import ContentArea from './ContentArea';

class Projects extends Component{

    state = { 
        errorMsg: '', 
        projects: []
    };

    //Lifecycle methods (some of them):
    componentDidMount = () => {
        //main for data loading
        axios.get('/api/images')
        .then((res)=>{
            console.log("got a response from MONGO");            
            this.setState({images: res.data});
            console.log("data: " + res.imgurl +" res: " + JSON.stringify(res));
            console.log("images found: " + this.state.images.length);            
        })
        .catch((err)=>{
            console.log("got an error from MONGO  -->  " + err);
        });
    }

    onSearchSubmit = (searchTerm) =>{
    
    }

    onClickChange = (event) => {
        //what should happen everytime there was a click on a a tag
        this.setState({year:event.target.value});
    }

    onFormSubmit = (event) => { //used to onSubmit={this.onFormSubmit}
        event.preventDefault(); //prevent the form to automatically submit itself
    }
    
    render(){
        return(
            <div className="projects">

                <ContentArea title="Projects">
                    <h4>Sort by ... </h4>
                    <ListProjects projects={this.state.projects}/>
                </ContentArea>

            </div>
        );
    }
}

export default Projects;
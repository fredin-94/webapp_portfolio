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
            this.setState({projects: res.data});
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
    //should also make sorting options also be per programming language on another select
    render(){
        return(
            <div className="projects">

                <ContentArea title="Projects">
                    <h4><label for="sorting">Sort by ... </label></h4>
                    
                    <select id="sorting" name="sorting">
                        <option value="Newest">Newest</option>
                        <option value="Oldest">Oldest</option>
                    </select> 
                    <ListProjects projects={this.state.projects}/>
                </ContentArea>

            </div>
        );
    }
}

export default Projects;
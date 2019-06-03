import React, {Component} from 'react';
import Thumbnail from './Thumbnail';

class Projects extends Component{
    
    state = {
        year: null
    }

    onSearchSubmit = (searchTerm) =>{
    
    }

    componentDidMount = () => {

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
                <h4>Sort by year</h4>
                <a href="/" onClick={this.onClickChange}>2017</a>
                <a href="/">2018</a>
                <Thumbnail image="" title="" date="" link="" />
            </div>
        );
    }
}

export default Projects;
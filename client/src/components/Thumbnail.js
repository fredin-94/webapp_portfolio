import React from 'react';
import { Col } from 'reactstrap';

const Thumbnail = (props)=>{
    return(
        <Col xs="4"> 
            <img src={props.image} alt="projects"/> 
            <h4>{props.projectTitle}</h4>
            <p>{props.projectDate}</p>
        </Col>
    );
};

Thumbnail.defaultProps = { //js object, if props are not passed in we get the default stuff from here
    image: 'imglocation.jpg',
    projectTitle: 'Unnamed project',
    projectDate: 'No date' 
};

export default Thumbnail;
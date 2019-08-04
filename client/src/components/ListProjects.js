import React from 'react';
import {Row, Col} from 'reactstrap';

import '../styles/ProjectListStyle.css';

var counter = 1;

const ListProjects = (props)=>{
    const projects = props.projects
        .sort((a,b)=>a.year < b.year)
        .map(({imgurl, title, year, _id, tags, projecturl})=>{ //this is kinda like a forloop for all images we got, then we save the results in a new array called images
        
        if(imgurl === "" || imgurl===null){
            imgurl = "https://www.tibco.com/blog/wp-content/uploads/2016/12/rsz_bigstock-programming-code-abstract-tech-131906921.jpg";
        }

        //console.log("-------------->LIST PROJECTS:" + title);

        var bgStyle = {
            backgroundImage: 'url(' + imgurl + ')'
        }


        if(counter % 2 === 0){
            counter++;
            return(
                //<li className="d-flex justify-content-between align-items-center" key={_id}> 
                    <Row key={_id} className="space">
                        <Col xs="8" className="text-area">
                            <a rel="noopener noreferrer" target="_blank" href={projecturl}><h4>{title}</h4></a>
                            <h6>{year}</h6>
                            <p>Tags: {tags}</p>
                            <p>Description: (make description in mongolab and model on server and put here)</p>
                        </Col>
                        <Col xs="4" className="noSidePad img-area">
                            <div className="listSidePicture" style={bgStyle}></div>
                        </Col>
                    </Row>
                    
                //</li>   
            );
        }else{
            counter++;
            return(
                //<li className="d-flex justify-content-between align-items-center" key={_id}> 
                    <Row key={_id} className="space">
                        <Col xs="4" className="noSidePad img-area">
                            <div className="listSidePicture" style={bgStyle}></div>
                        </Col>
                        <Col xs="8" className="text-area">
                            <a rel="noopener noreferrer" target="_blank" href={projecturl}><h4>{title}</h4></a>
                            <h6>{year}</h6>
                            <p>Tags: {tags}</p>
                            <p>Description: (make description in mongolab and model on server and put here)</p>
                        </Col>
                    </Row>
                    
                //</li>   
            );
        }
    });

    return(
        <div className="div-container"> 
            {projects}
        </div>
    );
}

export default ListProjects;
import React from 'react';
import '../styles/ProjectListStyle.css';

const ListProjects = (props)=>{
    const projects = props.projects.map(({imgurl, title, year, _id, tags, projecturl})=>{ //this is kinda like a forloop for all images we got, then we save the results in a new array called images
        
        if(imgurl === "" || imgurl===null){
            imgurl = "https://cdn11.bigcommerce.com/s-gho61/stencil/31cc7cb0-5035-0136-2287-0242ac11001b/e/3dad8ea0-5035-0136-cda0-0242ac110004/images/no-image.svg";
        }

        console.log("-------------->LIST PROJECTS:" + title);

        return(
            <li className="d-flex justify-content-between align-items-center" key={_id}> 
                <div className="image-parent">
                    <img className="img-fluid" src={imgurl} alt={title}/>
                </div>
                <div className="item-box">
                    <a rel="noopener noreferrer" target="_blank" href={projecturl}><h4>{title}</h4></a>
                    <h6>{year}</h6>
                    <p>Tags: {tags}</p>
                    <p>Description: (make description in mongolab and model on server and put here)</p>
                </div>
            </li>   
        );
    });

    return(
        <ul className="ul-container list-group list-group-flush">
            {projects}
        </ul>
    );
}

export default ListProjects;
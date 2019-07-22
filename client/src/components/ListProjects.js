import React from 'react';

const ListProjects = (props)=>{
    const projects = props.projects.map(({imgurl, title, year, _id, tags, projecturl})=>{ //this is kinda like a forloop for all images we got, then we save the results in a new array called images
        
        if(imgurl === "" || imgurl===null){
            imgurl = "https://cdn11.bigcommerce.com/s-gho61/stencil/31cc7cb0-5035-0136-2287-0242ac11001b/e/3dad8ea0-5035-0136-cda0-0242ac110004/images/no-image.svg";
        }

        return(
            <div className="project-item" key={_id}> 
                <a rel="noopener noreferrer" target="_blank" href={projecturl}><h4>{title}</h4></a>
                <h6>{year}</h6>
                <p>Tags: {tags}</p>
                <p>Description: (make description in mongolab and model on server and put here)</p>
                <img src={imgurl} alt={title}/>
            </div>   
        );
    });

    return(
        <div className="project-list">
            {projects}
        </div>
    );
}

export default ListProjects;
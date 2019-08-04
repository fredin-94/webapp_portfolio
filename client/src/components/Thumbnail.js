import React from 'react';

import '../styles/ImgGrid.css';
import '../styles/Thumbnail.css';
import '../styles/linkStyle.css';

const Thumbnail = (props)=>{
    //make it only show (or receive as props) the first NEWEST 8 items
    //should add LINK to the project too
    const images = props.images
    .sort((a,b)=>a.year < b.year)
    .map(({imgurl, title, year, _id, tags, projecturl})=>{ //this is kinda like a forloop for all images we got, then we save the results in a new array called images
        //use destructuring above to get the properties of the "image"
        if(imgurl === "" || imgurl===null){
            imgurl = "https://cdn11.bigcommerce.com/s-gho61/stencil/31cc7cb0-5035-0136-2287-0242ac11001b/e/3dad8ea0-5035-0136-cda0-0242ac110004/images/no-image.svg";
        }

        //let pTags = tags.join(" ");

        function getText(tag){ //trying to get tags to be separated
            let text = "";
            text = text + tag + " ";
            return text;
        }

        return(
            <div className="small-img" key={_id}> 
                <li>
                    <a rel="noopener noreferrer" target="_blank" href={projecturl}>
                        <img src={imgurl} alt={title}/>
                        <p className="project-tags">{tags}</p>
                        <h4 className="img-title">{title}</h4>
                    </a>
                </li>
                <p>{year}</p>
            </div>   
        );
    });
    
    return(
        <div className="img-grid"> 
            {images}
        </div>
    );
};

Thumbnail.defaultProps = { //js object, if props are not passed in we get the default stuff from here
    image: 'imglocation.jpg',
    projectTitle: 'Unnamed project',
    projectDate: 'No date' 
};

export default Thumbnail;
import React from 'react';
import { Col } from 'reactstrap';

import '../styles/ImgGrid.css';
import '../styles/Thumbnail.css';

const Thumbnail = (props)=>{
    
    //should add LINK to the project too
    const images = props.images.map(({imgurl, title, year, _id})=>{ //this is kinda like a forloop for all images we got, then we save the results in a new array called images
        //use destructuring above to get the properties of the "image"
        if(imgurl === "" || imgurl===null){
            imgurl = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png";
        }

        return(
            <div className="small-img" key={_id}> 
                <img src={imgurl} alt={title}/>
                <h4 className="img-title">{title}</h4>
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
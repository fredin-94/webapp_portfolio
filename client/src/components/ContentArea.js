import React from 'react';
import {Container} from 'reactstrap';
import '../styles/contentAreaStyle.css';

const ContentArea = (props)=>{
 
    return(
        <div className="contentArea" style={{backgroundColor: props.backgroundColor}}>
            <Container>
                <h2 style={{color: props.contentColor}}>{props.title}</h2>
                <hr style={{borderColor: props.contentColor}}/>
                <div style={{color: props.contentColor}}>
                    {props.children}
                </div>
            </Container>
        </div>
    );
}

export default ContentArea;
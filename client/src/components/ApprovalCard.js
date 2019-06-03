import React from 'react';

//remake this to be used for a single project or single image(?)
const ApprovalCard = (props)=>{
    return(
        <div>
            <div>{props.children}</div>
            <div>
                <div>
                    <button>approve</button>
                    <button>reject</button>
                </div>
            </div>
        </div>
    );
};

export default ApprovalCard;
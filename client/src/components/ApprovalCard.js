import React from 'react';

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
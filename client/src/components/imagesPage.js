import React, {Component} from 'react';
import ContentArea from './ContentArea';
import PostsPage from './PostsPage';

class ImagesPage extends Component{
    render(){
       /* this.state = {
            
        }*/

        return(
            <div>
                <ContentArea title="Posts">
                    <PostsPage/>
                </ContentArea>
            </div>
        );
    }
}

export default ImagesPage;
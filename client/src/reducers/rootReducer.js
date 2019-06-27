import {ADD_POST} from '../actions/actionTypes.js';
import {ADD_IMAGE} from '../actions/actionTypes.js';

const initialState = {
    posts: []
};

function rootReducer(state = initialState, action){
    if(action.type === ADD_POST){
        return Object.assign({}, state, {
            posts: state.posts.concat(action.payload)
        });
    }
    return state;
}

const reducerTest = (state = initialState,action)=>{
    if(action.type === ADD_IMAGE){
        return[...state, action.payload] //creates a new array and adds the new data to it
    }
}

//we should not use push since that changes the state
//and we shouldnt change the state, we should just like
//a changed state should just be a copy of the original state

export default rootReducer;
import actionTypes, { ADD_POST } from './actionTypes.js';

export function addPost(payload){
    return {
        type: ADD_POST,
        payload
    }
}
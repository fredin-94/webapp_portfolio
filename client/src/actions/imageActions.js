import { GET_IMAGE } from "./actionTypes";

export const getImage=(name, date)=>{
    return{
        type: GET_IMAGE,
        payload:{
            name: name
        }
    };
}


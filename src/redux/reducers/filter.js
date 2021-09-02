import { SHOW_ALL, SHOW_COMPLETE } from "../actions";

const initialState = 'SHOW_ALL'

export default function filter(previousState = initialState, action){

    if(action.type === SHOW_ALL){
        return "SHOW_ALL"
    }

    if(action.type === SHOW_COMPLETE){
        return "SHOW_COMPLETE"
    }

    return previousState;
}


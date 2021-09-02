import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from "../actions";

const initialState = [];
//[{text : "내용" ,done : false}, {text : "내용" ,done : false}]
export default function todos(previousState = initialState, action){

    if(action.type === ADD_TODO){
        return [...previousState, {text : action.text, done : false}]
    }

    if(action.type === COMPLETE_TODO){
        return previousState.map((todo, index) => {
            if(index === action.index){
                return {...todo, done : !todo.done}
            }
            return todo;
        })
    }

    if(action.type === DELETE_TODO){
        return previousState.filter((_,index) => index !== action.index);
    }

    return previousState;
}
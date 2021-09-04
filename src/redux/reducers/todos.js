import {  ADD_TODO, COMPLETE_TODO, DELETE_TODO } from "../actions";
const initialState = [];

// [{id : 'task-1' ,text : "내용" ,done : false}, {id: 'task-2', text : "내용" ,done : false}]}
export default function todos(previousState = initialState, action){

    if(action.type === ADD_TODO){
        return [...previousState, {id : action.id , text : action.text , done : false}]
    }



    if(action.type === COMPLETE_TODO){
        return previousState.map((todo) => {
            if(todo.id === action.todoId){
                return {...todo, done : !todo.done}
            }
            return todo;
        })
    }

    if(action.type === DELETE_TODO){
        return previousState.filter((todo) => todo.id !== action.todoId);
    }

    return previousState;
}
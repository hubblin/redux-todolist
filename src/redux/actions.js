export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export function addTodo(text){
    return {
        type: ADD_TODO,
        text,
    }
}


export function completeTodo(index){
    return{
        type: COMPLETE_TODO,
        index
    }
}

export function deleteTodo(index){
    return {
        type: DELETE_TODO,
        index
    }
}

export const SHOW_ALL = "SHOW_ALL";
export const SHOW_COMPLETE = "SHOW_COMPLETE";

export function showAll(){
    return {type: SHOW_ALL}
}

export function showComplete(){
    return {type: SHOW_COMPLETE}
}
import { useSelector } from "react-redux";

//할 일 텍스트를 저장하는 액션
export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export function addTodo(text, id){
    return {
        type: ADD_TODO,
        text,
        id
    }
}


export function completeTodo(todoId){
    return{
        type: COMPLETE_TODO,
        id : todoId
    }
}

export function deleteTodo(todoId){
    return {
        type: DELETE_TODO,
        id : todoId
    }
}

//컬럼을 지정하는 액션
export const ADD_COLUMN = "ADD_COLUMN";
export const ADD_TASKS = "ADD_TASKS";
export const DELETE_COLUMN = "DELETE_COLUMN";

export function addColumn(text, id){
    return{
        type: ADD_COLUMN,
        text,
        id
    }
}


export function addTasks(columnId, taskId ){
    return{
        type : ADD_TASKS,
        columnId,
        taskId
    }
}

export function deleteColumn(columnId){
    return{
        type: DELETE_COLUMN,
        columnId
    }
}

//보여주는 것을 조작할 액션
export const SHOW_ALL = "SHOW_ALL";
export const SHOW_COMPLETE = "SHOW_COMPLETE";

export function showAll(){
    return {type: SHOW_ALL}
}

export function showComplete(){
    return {type: SHOW_COMPLETE}
}
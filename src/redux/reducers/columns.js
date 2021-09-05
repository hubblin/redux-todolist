import {ADD_COLUMN, ADD_TASKS, DELETE_COLUMN, DELETE_TASKS} from '../actions';
const initialState = [];

export default function columns(previousState = initialState , action){
    if(action.type === ADD_COLUMN){
        return [...previousState, {id : action.id , title : action.text, taskIds : []}]
    }

    if(action.type === ADD_TASKS){
        return previousState.map(column => {
            if(column.id === action.columnId){

                return {...column, taskIds : [...column.taskIds,  action.taskId]}
            }
            return column;
        })
    }

    if(action.type === DELETE_TASKS){
        return previousState.map(column => {
            if(column.id === action.columnId){
                return {...column, taskIds : column.taskIds.filter((taskId) => taskId !== action.taskId)}
            }
            return column;
        })
    }


    if(action.type === DELETE_COLUMN){
        return previousState.filter((column) => column.id !== action.columnId);
    }

    return previousState;
}
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import TodoForm from "../components/TodoForm";
import { addTodo , addColumn } from "../redux/actions";

export default function TodoFormContainer(){
    const dispatch = useDispatch();

    const add = useCallback((text, id) => {
        dispatch(addColumn(text, id))
    },[dispatch])

    

    return <TodoForm add={add}/>
}
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import TodoForm from "../components/TodoForm";
import { addTodo } from "../redux/actions";

export default function TodoFormContainer(){
    const dispatch = useDispatch();

    const add = useCallback((text) => {
        dispatch(addTodo(text))
    },[dispatch])

    return <TodoForm add={add}/>
}
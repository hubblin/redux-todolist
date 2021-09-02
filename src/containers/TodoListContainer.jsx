import {useCallback} from 'react';
import { useDispatch, useSelector } from "react-redux";
import TodoList from "../components/TodoList";
import { completeTodo, deleteTodo } from '../redux/actions';

export default function TodoListContainer() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const complete = useCallback((index) => {
    dispatch(completeTodo(index))
    
  },[dispatch])
  
  const delete_todo = useCallback((index) => {
    dispatch(deleteTodo(index))
  }, [dispatch])
  

  return <TodoList todos={todos} complete={complete} deleteTodo={delete_todo}/>;
}

import {useCallback} from 'react';
import { useDispatch, useSelector } from "react-redux";
import TodoList from "../components/TodoList";
import { completeTodo, deleteTasks, deleteTodo } from '../redux/actions';

export default function TodoListContainer({todoIds, columnId}) {
  const todos = useSelector((state) => state.todos);
 

  
  const dispatch = useDispatch();

  const complete = useCallback((index) => {
    dispatch(completeTodo(index))
  },[dispatch])
  
  const delete_todo = useCallback((index) => {
    dispatch(deleteTodo(index))
    dispatch(deleteTasks(columnId, index))
  }, [dispatch, columnId])

  
  const myTodo = todos.map((todo) => {if(todoIds.includes(todo.id)){return todo} return undefined;}).filter((element) => element !== undefined)
  

  return <TodoList todos={myTodo} complete={complete} deleteTodo={delete_todo}/>;
}

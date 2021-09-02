import { useDispatch, useSelector } from "react-redux";
import TodoList from "../components/TodoList";

export default function TodoListContainer() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return <TodoList todos={todos} />;
}

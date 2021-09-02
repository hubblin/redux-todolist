import "../styles/todolist.scss"
import "@material-ui/icons"

export default function TodoList({todos}){
    function click(){
        
    }
    return (
        <ul className="todolist-container">
            {todos.map((todo) => {
                return (
                    <li>
                        <div className="todo-content">{todo.text}</div>
                        {todo.done ? 
                        <div className="todo-done material-icons" onClick={click}>
                            done
                        </div> : 
                        <div className="todo-done material-icons" onClick={click}>
                            close
                        </div>
                        }
                    </li>
                )
            })}
        </ul>

    )
}
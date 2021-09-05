import "../styles/todolist.scss"


export default function TodoList({todosId, todos, complete, deleteTodo}){
    function click(index){
        complete(index);
    }

    function delete_todo(index){
        deleteTodo(index);
    }

    

    return (
        <ul className="todolist-container">
            {todos.map(todo => {
                return (
                    <li key={todo.id} draggable='true'>                        

                        <div className="main">                         
                            {todo.done ? 
                                <div className="todo-done done material-icons" onClick={() => click(todo.id)}>
                                    done
                                </div> : 
                                <div className="todo-done not-done material-icons" onClick={() => click(todo.id)}>
                                    close
                                </div>
                            }
                            <div className="todo-content">{todo.text}</div>
   
                        </div>
                        <div className="delete" onClick={() => delete_todo(todo.id)}>
                            <i className="material-icons">delete_outline</i>
                        </div>
                    </li>
                )
            })}
        </ul>

    )
}
import { useRef } from "react"
import TodoListContainer from "../containers/TodoListContainer"

export default function Column({todos, title, id, add}){
    const inputRef = useRef();
    function click(){
        add(inputRef.current.value, id);
    }
    console.log(todos);
    return(
    <div className="column-container">
        <div className="column-title">
            {title}
        </div>
        <div className="column-form">
            <input type="text" ref={inputRef}/>
            <button onClick={click}>추가</button>
        </div>
        <TodoListContainer todoIds={todos}/>
    </div>
    )
}
import { useRef } from "react"
import TodoListContainer from "../containers/TodoListContainer"
import "../styles/column.scss";


export default function Column({todos, title, id, add}){
    const inputRef = useRef();
    function click(){
        add(inputRef.current.value, id);
    }
    let todoHeight = (todos.length * 42) + 4 + 40 + 20 + 10;




    return(

        <div className="column-container" style={{height: `${todoHeight}px`}}>
            <div className="column-title">
                {title}
            </div>
            <div className="column-form">
                <input type="text" ref={inputRef}/>
                <button onClick={click}>추가</button>
            </div>


            <TodoListContainer todoIds={todos} columnId={id}/>

        </div>

    )
}
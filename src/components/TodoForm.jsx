import {useRef} from 'react';
import "../styles/todoform.scss"

export default function TodoForm({add}){

    const inputRef = useRef()
    function click(){
        add(inputRef.current.value);
        inputRef.current.value = '';
    }

    return (
        <div className="todoform-container">
            <input type="text" ref={inputRef}/>
            <button onClick={click}>add</button>
        </div>
    )
}
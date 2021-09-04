import {useRef, useState} from 'react';
import "../styles/todoform.scss"

export default function TodoForm({add}){
    const [cid, setCid] = useState(1);

    const inputRef = useRef()
    function click(){
        add(inputRef.current.value, `column-${cid}`);
        inputRef.current.value = '';
        setCid(cid + 1);
    }

    return (
        <div className="todoform-container">
            <input type="text" ref={inputRef}/>
            <button onClick={click}>add</button>
        </div>
    )
}
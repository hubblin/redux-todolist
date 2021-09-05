import Column from "../components/Column";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useState} from "react";
import { addTasks, addTodo } from "../redux/actions";

export default function TodoColumnContainer(){
    const [tid, setTid] = useState(1);

    const mycolums = useSelector((state) => state.columns);
    const dispatch = useDispatch();


    const add = useCallback((text, id) => {
        setTid(tid + 1);
        dispatch(addTasks(id, `task-${tid}`));
        dispatch(addTodo(text, `task-${tid}`));
    },[dispatch, tid]);


    console.log(mycolums)

    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            {mycolums.map((colum, index) => <Column key={colum.id} id={colum.id}  todos={colum.taskIds} title={colum.title} add={add}/>)}
        </div>
    )
}
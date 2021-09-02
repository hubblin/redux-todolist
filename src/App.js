import { useState, useEffect, useContext } from 'react';
import { addTodo } from './redux/actions';
import './App.scss';
import { useSelector, useDispatch} from "react-redux";


function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();


  
  return (
    <div className="App">
      <header className="App-header">
        <p>{JSON.stringify(todos)}</p>
        <button onClick={() => {
          dispatch(addTodo('Hello'))
        }}>
          추가
        </button>
      </header>
    </div>
  );
}

export default App;

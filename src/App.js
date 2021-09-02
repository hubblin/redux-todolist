import { useState, useEffect, useContext } from 'react';
import { addTodo } from './redux/actions';
import './App.scss';
import { useSelector, useDispatch} from "react-redux";

import Header from './components/Header';
import Footer from './components/Footer';
import TodoListContainer from './containers/TodoListContainer';
import TodoFormContainer from './containers/TodoFormContainer';


function App() {
  return (
    <div className="App">
      <Header/>

      <div className="contents">
        <TodoFormContainer/>
        <TodoListContainer/>
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;

import { DragDropContext } from 'react-beautiful-dnd';
import './App.scss';


import Header from './components/Header';
import Footer from './components/Footer';
import TodoListContainer from './containers/TodoListContainer';
import TodoFormContainer from './containers/TodoFormContainer';
import TodoColumnContainer from './containers/TodoColumnContainer';


function App() {

  const onDragEnd = result => {

  }

  return (
    
    <div className="App">
      <Header/>

      <div className="contents">
        <TodoFormContainer/>
        <DragDropContext onDragEnd={onDragEnd}>
          <TodoColumnContainer/>
        </DragDropContext>
      </div>
      
      <Footer/>
    </div>
  
  );
}

export default App;

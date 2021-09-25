import logo from './logo.svg';
import './App.css';
import TodoItem from './components/todoItem';
import './components/todoList';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';
import React, {useState, useEffect} from 'react';
import generateRandomString from './utils/js/randomString';

function App() {

  const [todo, setTodo] = useState([]);
  const [complete, setComplete] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(()=> {
    
  })

  const addItem = (text) => {
    const randomNum = generateRandomString();
    const item = { id: randomNum, text: text, done: false };
    setTodo(todo => [...todo, item]);
    console.log('todo:', todo)
  }

  const addComplete = (id) => {
    const item = findItem(id);
    const newItem = {
      id: item.id,
      text: item.text,
      done: true
    }
    const filteredtoDos = todo.filter(item => item.id !== id);
    setComplete([...complete, newItem]);
    setTodo(filteredtoDos);
  }

  const findItem = (id) => {
    return todo.find(item => item.id === id);
  }

  const findComplete = (id) => {
    return complete.find(item => item.id === id);
  }

  const toggleComplete = (id) => {
    const item = findComplete(id);
    if (item.done){
      const newItem = {
        id: item.id,
        text: item.text,
        done: !item.done
      };
      const filteredComplete = complete.filter(item => item.id !== id);
      setComplete(filteredComplete);
      setTodo([...todo, newItem]);
    }
    else {
      const item = findItem(id);
      const newItem = {
        id: item.id,
        text: item.text,
        done: true
      }
      const filteredtoDos = todo.filter(item => item.id !== id);
      setComplete([...complete, newItem]);
      setTodo(filteredtoDos);
    }
  }

  return (
    <div>
      <TodoList>
        {todo.map((item,index) => <TodoItem key={index} id={item.id} text={item.text} done={item.done} handleDone={setDone} toggleComplete={addComplete} /> )}
        <br />
        {complete.map((item,index) => <TodoItem key={index} id={item.id} text={item.text} done={item.done} handleDone={setDone} toggleComplete={toggleComplete} /> )}
      </TodoList>
      <TodoForm addItem={addItem} />
    </div>
  );
}

export default App;

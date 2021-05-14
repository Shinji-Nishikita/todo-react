import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [inputTodo, setInputTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleClick = () => {
    setTodos(todos.concat(inputTodo));
  };

  return (
    <div className="App">
      <header>
      <h1>My ToDo List</h1>
      </header>
      <Form />
      <input type="text" value={inputTodo} onChange={(e) => setInputTodo(e.target.value)} />
      <button onClick={handleClick}>add</button>
      <div>
        {todos.map(todo => <p>{todo}</p>)}
      </div>
    </div>
  );
}

export default App;

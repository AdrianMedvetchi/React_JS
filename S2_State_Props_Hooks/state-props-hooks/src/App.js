import logo from './logo.svg';
import './App.css';
import Counter from './counter.js';
import TextInput from './input.js';
import ToDoList from './todo.js';
import Time from './liveTimer';

function App() {
  return (
    <Counter />,
    <TextInput />,
    <ToDoList />,
    <Time />
  );
}

export default App;

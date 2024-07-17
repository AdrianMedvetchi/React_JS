import './App.css';
import Greeting from './Greeting';
import Counter from './Counter';
import MessageList from './MessageList';
import ThemeSwitcher from './ThemeSwitcher';
import TextDisplayForm from './TextDisplayForm';

function App() {
  const name = 'Vladimir';
  return (
    <div className="App" >
        <h1>Learning React</h1>
        {/* <Greeting name={name}/>
        <Counter />
        <MessageList /> */}
        <ThemeSwitcher />
        <TextDisplayForm />
    </div>
  )
}

export default App;

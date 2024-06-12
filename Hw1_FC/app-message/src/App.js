import logo from './logo.svg';
import './App.css';
import Message from './Message';

function App() {
  return (
    <div className="App">
      <h1>Messages</h1>
      <div className="message-container">
        <Message author="Terminator" message="I'll be back" date="23.12.3065" />
        <Message author="Darth Vader" message="Luke, I am your father" date="04.05.1977" />
        <Message author="Yoda" message="Do or do not. There is no try." date="21.05.1980" />
        <Message author="Gandalf" message="You shall not pass!" date="19.12.2001" />
        <Message author="Jack Sparrow" message="Why is the rum gone?" date="09.07.2003" />
      </div>
    </div>
  );
}

export default App;

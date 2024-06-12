import logo from './logo.svg';
import './App.css';
import Greeting from './greeting';
import CurrentTime from './CurrentTime';
import EventCard from './EventCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App">
          <Greeting /> <CurrentTime />
        </div>
        <div className="App">
          <h1>Upcoming Events</h1>
          <div className="event-list">
            <EventCard name="Conference" date="2024-06-20" location="New York" />
            <EventCard name="Workshop" date="2024-07-10" location="San Francisco" />
            <EventCard name="Seminar" date="2024-08-05" location="Chicago" />
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Say Hello!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


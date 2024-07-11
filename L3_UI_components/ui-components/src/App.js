import React, { createContext, useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';

// function GrandParent() {
//   return <Parent message="Hello from the top"/>
// };

// function Parent(props) {
//   return <Child message={props.message}/>
// };

// function Child(props) {
//   return <Grandchild message={props.message}/>
// };

// function Grandchild(props) {
//   return <p>{props.message}</p>
// };

//EX1
// const MessageContext = createContext();

// function GrandGrandGrandChild() {
//   const message = useContext(MessageContext);
//   return <p>{message}</p>
// }

// function GrandParent() {
//   return (
//     <MessageContext.Provider value="Hello from the top!">
//       <Parent/>
//     </MessageContext.Provider>
//   );
// }

// function Parent() {
//   return <Child />;
// }

// function Child() {
//   return <GrandChild />;
// }

// function GrandChild() {
//   return <GrandGrandGrandChild />;
// }

// function App() {
//   return (
//     <div className="App">
//       <h1>How to use React.Context</h1>
//       <GrandParent />
//     </div>
//   );
// }

//EX2
// const ThemeContext = createContext();

// const ThemeButton = () => {
//   const theme = useContext(ThemeContext);
//   return (
//     <button style={{ background: theme.background, color: theme.foreground }}>Toggle Theme</button>
//   );
// };

// const App = () => {
//   const [theme, setTheme] = useState({
//     background: 'white',
//     foreground: 'black',
//   });

//   return (
//     <ThemeContext.Provider value={theme}>
//       <div className="App">
//         <h1>Toggle Theme</h1>
//         <ThemeButton />
//         <button onClick={() => setTheme({ background: 'black', foreground: 'white', })}>Change Theme</button>
//       </div>
//     </ThemeContext.Provider>
//   );
// };

//EX3

// const ThemeContext = createContext();
// const NotesContext = createContext();

// const useTheme = () => useContext(ThemeContext);
// const useNotes = () => useContext(NotesContext);

// const NotesList = () => {
//   const { notes } = useNotes();
//   return (
//     <ul>
//       {notes.map((note, index) => (
//         <li key={index}>{note}</li>
//       ))}
//     </ul>
//   );
// };

// const NoteInput = () => {
//   const [inputValue, setInputValue] = useState('');
//   const { addNote } = useNotes();

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleAddNote = () => {
//     addNote(inputValue);
//     setInputValue('');
//   };

//   return (
//     <div>
//       <input type="text" value={inputValue} onChange={handleInputChange} />
//       <button onClick={handleAddNote}>Add Note</button>
//     </div>
//   );
// };

// const ThemeToggle = () => {
//   const { theme, toggleTheme} = useTheme();
//   return (
//     <button onClick={toggleTheme}>Toggle Theme in { theme === 'light' ? 'Dark' : 'Light'}</button>
//   );
// };

// const App = () => {
//   const [theme, setTheme] = useState('light');
//   const [notes, setNotes] = useState(['element1', 'element2', 'element3']);

//   const toggleTheme = () => {
//     setTheme(theme === 'light'? 'dark' : 'light');
//   };

//   const addNote = (note) => {
//     setNotes([...notes, note]);
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <NotesContext.Provider value={{ notes, addNote }}>
//         <div className={`App ${theme}`} style={{ color: theme === 'light' ? 'black' : 'white', background: theme === 'light' ? 'white' : 'black'}}>
//           <h1>Toggle Theme and Add Notes</h1>
//           <ThemeToggle />
//           <NoteInput />
//           <NotesList />
//         </div>
//       </NotesContext.Provider>
//     </ThemeContext.Provider>
//   );
// };


//HOC exemple

const withStyle = (WrapperComponent, styles) => {
  return (props) => {
    const newProps = {...props, styles};
    return <WrapperComponent {...newProps} />;
  };
};

const Button = ({ styles }) => {
  return (
    <button style={styles}>Click Me</button>
  );
};


const Text = ({ styles }) => {
  return (
    <p style={styles}>Text</p>
  );
};

const StyledButton = withStyle(Button, { background: 'blue', color: 'white'});
const StyledButton2 = withStyle(Button, { background: 'red', color: 'white'});
const StyledText = withStyle(Text, { background: 'red', color: 'white'});

const App = () => {
  return (
    <div className="App">
      <h1>Higher-Order Components</h1>
      <StyledButton />
      <StyledButton2 />
      <StyledText />
    </div>
  );
};
export default App;

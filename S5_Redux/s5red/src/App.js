import './App.css';
import React, { createContext, useContext, useState } from 'react';
import Loading from './Loading';
import Counter from './Counter';
// import Header from './Header';
// import Profile from './Profile';
// import Footer from './Footer';

// export const ThemeContext = createContext('light');
// export const UserContext = createContext('Guest');

// const withLoadingIndicator = (Component, isLoading) => {
//   return (props) => {
//     const newProps = { ...props, isLoading,};
//     return <Component {...newProps} />;
//   };
// };

function App() {
  // const [theme, setTheme] = useState('light');
  // const [user, setUser] = useState('Guest');

  // function changeUser(e) {
  //   let newUser = e.target.closest("div").querySelector('input').value;
  //   setUser(newUser);
  //   newUser = "";
  // }

  // function toggleTheme() {
  //   setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  // }

  // return (
  //   <>
  //     <ThemeContext.Provider value={theme}>
  //       <UserContext.Provider value={user}>
  //           <Header />
  //           <main>
  //             <input />
  //             <button onClick={changeUser}>Edit User</button>
  //           </main>
  //           <Profile />
  //           <Footer />
  //           <div>
  //             <button onClick={toggleTheme}>Toggle Theme</button>
  //           </div>
  //       </UserContext.Provider>
  //     </ThemeContext.Provider>
  //   </>
  // );
  // const [isLoading, setIsLoading] = useState(true);
  // const NewLoading = withLoadingIndicator(Loading, isLoading);

  // setTimeout(() => {
  //   setIsLoading((prev) => !prev);
  // }, 3000);
  
  // return (
  //   <div className="App">
  //     <NewLoading />
  //   </div>
  // );

  return (
    <div className="App">
      <h1>Learning React</h1>
      <Counter />
    </div>
  );
}

export default App;



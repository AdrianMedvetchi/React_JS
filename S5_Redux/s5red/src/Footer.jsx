// Footer.jsx
import { useContext, useState } from 'react';
import { ThemeContext } from './App';
import classes from './Profile.module.css';

function Footer() {
  const theme = useContext(ThemeContext);
  const [toggleDarkMode, setToggleDarkMode] = useState(false);

  const toggleMode = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  return (
    <footer className={classes.footer}>
      <div>
        <span className={classes.toggleMode} onClick={toggleMode}>
          {toggleDarkMode ? "Light Mode" : "Dark Mode"}
        </span>
      </div>
      <div>
        <span className={classes.theme}>{theme}</span>
      </div>
    </footer>
  );
}

export default Footer;

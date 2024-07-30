// Profile.jsx
import { useContext } from 'react';
import { ThemeContext } from './App';
import classes from './Profile.module.css';

function Profile() {
  const theme = useContext(ThemeContext);
  return (
    <div className={theme === "light" ? classes.light : classes.dark}>
      <h1>Profile Page</h1>
      <p>This is the profile page. The background color changes based on the theme.</p>
    </div>
  );
}

export default Profile;

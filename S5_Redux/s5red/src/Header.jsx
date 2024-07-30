// Header.jsx
import { useContext } from 'react';
import { UserContext } from './App';

function Header() {
  const user = useContext(UserContext);
  return (
    <header>
      <h1>Hello, {user}!</h1>
    </header>
  );
}

export default Header;

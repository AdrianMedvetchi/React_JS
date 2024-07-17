import React, { useState } from 'react';

function ThemeSwitcher() {
    const [ style, setStyle ] = useState('light')
    
    const toggleTheme = () => {
        setStyle(style === 'light'? 'dark' : 'light')
    }

    return (
        <div style={{ color: style === 'light' ? 'black' : 'white', background: style === 'light' ? 'white' : 'black'}}>
            <button onClick={toggleTheme}>Toggle Theme to {style}</button>
        </div>
    );
}

export default ThemeSwitcher;
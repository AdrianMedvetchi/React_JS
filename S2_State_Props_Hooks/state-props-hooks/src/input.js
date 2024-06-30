import { useState } from "react";

function TextInput() {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div style={{ margin: '20px' }}>
            <input 
                type="text" 
                placeholder="Enter your text here" 
                value={text} 
                onChange={handleChange} 
            />
            <p style={{ fontSize: '24px', marginTop: '10px' }}>{text}</p>
        </div>
    );
}

export default TextInput;


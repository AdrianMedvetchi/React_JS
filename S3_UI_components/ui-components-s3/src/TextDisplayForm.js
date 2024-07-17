import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function TextDisplayForm() {
    const [text, setText] = useState('');
    const [printedText, setPrintedText] = useState('');

    const handleChange = (event) => {
        event.preventDefault();
        setPrintedText(text);
        setText(event.target.value);
    };

    return (
        <div>
            <TextField label="Type smth" variant="outlined" fullWidth value={text} onChange= {(e) => setText(e.target.value)} margin="normal"/>
            <Button variant="contained" color="primary" onClick={handleChange} style={{marginBottom: 20}}>Print</Button>
            <Typography variant="h5">{text}</Typography>            
        </div>
    );
}

export default TextDisplayForm;
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    if (value === '') {
      setFahrenheit('');
    } else {
      setFahrenheit((value * 9 / 5 + 32).toFixed(2));
    }
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    if (value === '') {
      setCelsius('');
    } else {
      setCelsius(((value - 32) * 5 / 9).toFixed(2));
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2} mt={4}>
      <TextField
        label="Цельсия"
        value={celsius}
        onChange={handleCelsiusChange}
        variant="outlined"
      />
      <TextField
        label="Фаренгейта"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
        variant="outlined"
      />
    </Box>
  );
}

export default TemperatureConverter;

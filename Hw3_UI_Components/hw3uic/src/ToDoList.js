import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2} mt={4}>
      <TextField
        label="Новая задача"
        value={task}
        onChange={handleTaskChange}
        variant="outlined"
      />
      <Button variant="contained" color="primary" onClick={addTask}>
        Добавить задачу
      </Button>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index} divider>
            <ListItemText primary={task} />
            <IconButton edge="end" aria-label="delete" onClick={() => removeTask(index)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default TodoList;

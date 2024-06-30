import { useState } from 'react';

function ToDoList() {
    const [tasks, setTasks] = useState([]);

    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };
    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    return ( 
        <div>
            <h1>To-Do List</h1>
            <input type="text" placeholder="Enter your text here" value={text} onChange={handleChange} />
            <button onClick={() => addTask(`${text}`)}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
     );
}

export default ToDoList;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../tasksSlice';

function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const status = useSelector((state) => state.tasks.status);
  const error = useSelector((state) => state.tasks.error);

  // Диспетчеризация действия fetchTasks при монтировании компонента
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTasks());
    }
  }, [status, dispatch]);

  let content;

  if (status === 'loading') {
    content = <p>Загрузка задач...</p>;
  } else if (status === 'succeeded') {
    content = (
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.title}</strong> - {task.completed ? 'Выполнено' : 'Не выполнено'}
          </li>
        ))}
      </ul>
    );
  } else if (status === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <div>
      <h2>Список задач</h2>
      {content}
    </div>
  );
}

export default TaskList;

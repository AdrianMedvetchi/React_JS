import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tasksData from './data/tasks';

// Асинхронное действие для загрузки задач
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tasksData); 
    }, 1000);
  });
});

// Слайс задач
const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    // Могут быть добавлены дополнительные редьюсеры, если необходимо
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default tasksSlice.reducer;
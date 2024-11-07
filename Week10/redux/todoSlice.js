// redux/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    loading: false,
    error: null,
  },
  reducers: {
    addTodoRequest: (state, action) => {
      state.loading = true;
    },
    addTodoSuccess: (state, action) => {
      state.loading = false;
      state.todos.push(action.payload);
    },
    addTodoFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateTodoRequest: (state, action) => {
      state.loading = true;
    },
    updateTodoSuccess: (state, action) => {
      state.loading = false;
      const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) state.todos[index] = action.payload;
    },
    updateTodoFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addTodoRequest,
  addTodoSuccess,
  addTodoFailure,
  updateTodoRequest,
  updateTodoSuccess,
  updateTodoFailure,
} = todoSlice.actions;

export default todoSlice.reducer;

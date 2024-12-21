import { createSlice, nanoid } from '@reduxjs/toolkit';

const loadTodosFromLocalStorage = () => {
  const savedTodos = localStorage.getItem('todos');
  return savedTodos ? JSON.parse(savedTodos) : [{ id: 1, text: "Hello world" }];
};

// Initial state is loaded from localStorage
const initialState = {
  todos: loadTodosFromLocalStorage(),
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const isDuplicate = state.todos.some((todo) => todo.text === action.payload);
      if (!isDuplicate) {
        const todo = {
          id: nanoid(),
          text: action.payload,
        };
        state.todos.push(todo);
       
        localStorage.setItem('todos', JSON.stringify(state.todos));
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;

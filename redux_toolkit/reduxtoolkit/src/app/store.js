import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../counter/counterSlice';
import todoReducer from "../todolist/todolistSlice"
export const store = configureStore({
  reducer: {
    CounterR: counterReducer,
    todolistR: todoReducer,
  }
});

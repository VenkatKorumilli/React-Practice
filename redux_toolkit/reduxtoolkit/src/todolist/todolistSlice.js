import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [
    { title: "Venkat", id: uuidv4(), status: true },
    { title: "Virat", id: uuidv4(), status: true },
  ],
};

export const todolistSlice = createSlice({
  name: "todolistR",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        title: action.payload,
        id: uuidv4(),
        status: false,
      };
      state.todos.push(newTodo);
    },
  },
});

export const { addTodo } = todolistSlice.actions;
export default todolistSlice.reducer;

import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "../todolist/todoSlice"
export const store = configureStore({
  reducer: {
   todolistR:todoReducer
  },
})
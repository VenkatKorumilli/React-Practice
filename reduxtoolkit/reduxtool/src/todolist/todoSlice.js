import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
todos:[
{
title:"Venkat",
id:uuidv4(),
status:true,
},
{
title:"Virat",
id:uuidv4(),
status:true,
}
]
}

export const todoSlice = createSlice({
name:"todolistR",
initialState,
reducers:{
addTodo:(state,action)=>{
state.todos.push(action.payload)
},
 deleteTodo: (state, action) => {
      // var temp = state.todos.filter((todo) => {
      //   if (todo.id !== action.payload.id) {  
      //     return true;
      //   }
      // });
      // return { ...state, todos: [...temp] };

      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);

    },
}
})

export const {addTodo,deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;
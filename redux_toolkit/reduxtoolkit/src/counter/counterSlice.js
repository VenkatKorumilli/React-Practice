
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
count:0,
}

export const counterSlice = createSlice({
name:"counterR",
initialState,
reducers:{
inc:(state)=>{
state.count+=1
},
dec:(state)=>{
state.count-=1
}
}
})

export const {inc,dec} = counterSlice.actions
export default counterSlice.reducer
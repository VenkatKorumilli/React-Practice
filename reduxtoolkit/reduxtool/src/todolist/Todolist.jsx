import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from './todoSlice'
import { v4 as uuidv4 } from 'uuid';
const Todolist = () => {
    const {todos} = useSelector((state)=>state.todolistR)
    const [newTodo,setNewtodo] = useState("")
    const dispatch = useDispatch()
    return (
    
    <div>
    <div>
    <input
    onChange={(e)=>{setNewtodo(e.target.value)}}
    value={newTodo}
    />
    <button onClick={()=>{dispatch(addTodo({title:newTodo,id:uuidv4()}))}}>Add Todo</button>
    </div>
    <ul>
    {
    todos.map((todo)=>{
    return(
    <li>{todo.title}
    <button onClick={()=>{dispatch(deleteTodo({id:todo.id}))}}>Delete</button>
    </li>
    )
    })
    }
    </ul>
    </div>
  )
}

export default Todolist
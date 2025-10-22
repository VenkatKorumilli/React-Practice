import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./todolistSlice";

const Todolist = () => {
  const { todos } = useSelector((state) => state.todolistR);
  const [newTodo, setNewtodo] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewtodo(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={() => dispatch(addTodo(newTodo))}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;

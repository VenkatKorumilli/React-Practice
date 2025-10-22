import React, { useState } from "react";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";

function Todolist(props) {
  const [newtodo, setNewtodo] = useState("");

  return (
    <div>
      <input
        type="text"
        value={newtodo}
        onChange={(e) => setNewtodo(e.target.value)}
      />
      <button
        onClick={() => {
          if (newtodo.trim() !== "") {
            props.dispatch({ type: "ADD_TODO", payload: { id: uuid(), title: newtodo.trim() } });
            setNewtodo("");
          }
        }}
      >
        Add Todo
      </button>
      <ul>
        {props.todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => props.dispatch({ type: "DELETE_TODO", payload: todo.id })}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default connect(store => store.todoReducer)(Todolist);

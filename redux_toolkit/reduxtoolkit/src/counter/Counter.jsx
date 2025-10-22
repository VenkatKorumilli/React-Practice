import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dec, inc } from "./counterSlice";

const Counter = () => {
  var { count } = useSelector((state) => state.CounterR);
  var dispatch = useDispatch();

  return (
    <div
      className="d-flex flex-column align-items-center p-3   border rounded"
      style={{ width: "300px" }}
    >
      <h3 className="mb-4">Counter {count}</h3>
      <div className="d-flex justify-content-between w-100">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            dispatch(inc());
          }}
        >
          Increment
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            dispatch(dec());
          }}
        >
          Decrement
        </button>
        
      </div>
    </div>
  );
};

export default Counter;

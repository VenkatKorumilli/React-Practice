import { createStore, combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { todoReducer } from "./todoReducer";
var store = createStore(combineReducers({counterReducer,todoReducer}));

export default store;

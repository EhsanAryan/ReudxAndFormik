import { createStore } from "redux";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import allReducers from "./combineReducers";

const store = createStore(allReducers , applyMiddleware(thunk));

export default store;
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import allReducers from "./combineReducers";

const store = configureStore({
    reducer : allReducers ,
    middleware : [thunk]
})

export default store;
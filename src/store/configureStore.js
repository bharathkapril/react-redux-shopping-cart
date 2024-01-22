import { applyMiddleware, createStore } from "redux";
import combineStore from "./combineStore";
import { thunk } from "redux-thunk";

const store = createStore(combineStore, applyMiddleware(thunk));

export default store;

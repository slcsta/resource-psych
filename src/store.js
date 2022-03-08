// from redux library need to import create store
import { createStore } from "redux";

export default createStore(reducer, applyMiddleware(thunk))
// from redux library need to import create store
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import notesReducer from "./reducers/notesReducer";

export default createStore(notesReducer, applyMiddleware(thunk))
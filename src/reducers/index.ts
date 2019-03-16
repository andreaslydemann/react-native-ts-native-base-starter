import { combineReducers } from "redux";
import { IRootState } from "./interfaces/IRootState";
import counterReducer from "./counter.reducer";

const reducers = combineReducers<IRootState>({
  counter: counterReducer
});

export default reducers;

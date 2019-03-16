import { combineReducers } from "redux";
import { IRootState } from "./interfaces/IRootState";
import counterReducer from "./counter.reducer";

const reducers = combineReducers<IRootState>({
  counters: counterReducer
});

export default reducers;

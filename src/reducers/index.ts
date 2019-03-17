import { combineReducers } from "redux";
import { RootState } from "./states";
import counterReducer from "./counter.reducer";

const reducers = combineReducers<RootState>({
  counter: counterReducer
});

export default reducers;

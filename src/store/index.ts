import { Store, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers";
import { IRootState } from "../reducers/interfaces/IRootState";
import { logger } from "./middleware";

export function configureStore(initialState?: IRootState): Store<IRootState> {
  const middleware = composeWithDevTools(applyMiddleware(logger));

  const store = createStore(
    rootReducer as any,
    initialState as any,
    middleware
  ) as Store<IRootState>;

  return store;
}

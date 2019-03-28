import { Store, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { RootState } from "reducers/states";
import { logger } from "./middleware";
import reducers from "../reducers";

export function configureStore(initialState?: RootState): Store<RootState> {
  const middleware = composeWithDevTools(applyMiddleware(logger));

  const store = createStore(
    reducers as any,
    initialState as any,
    middleware
  ) as Store<RootState>;

  return store;
}

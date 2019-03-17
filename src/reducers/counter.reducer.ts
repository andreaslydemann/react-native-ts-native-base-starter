import { CounterState } from "./states";
import IAction from "../actions/interfaces/IAction";
import { COUNTER_TYPES } from "../actions/counter.actions";

let initialState: CounterState = {
  value: 0
};

export default function(
  state: CounterState = initialState,
  action: IAction<any>
) {
  switch (action.type) {
    case COUNTER_TYPES.INCREMENT:
      return {
        ...state,
        value: ++state.value
      };
    case COUNTER_TYPES.DECREMENT:
      return {
        ...state,
        value: --state.value
      };
    default:
      return state;
  }
}

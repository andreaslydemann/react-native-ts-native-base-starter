import { CounterState } from "./interfaces/IRootState";
import IAction from "../actions/interfaces/IAction";
import { ActionType } from "../actions/counter.actions";

let initialState: CounterState = {
  value: 0
};

export default function(
  state: CounterState = initialState,
  action: IAction<any>
) {
  switch (action.type) {
    case ActionType.INCREMENT:
      return {
        ...state,
        number: ++state.value
      };
    case ActionType.DECREMENT:
      return {
        ...state,
        number: --state.value
      };
    default:
      return state;
  }
}

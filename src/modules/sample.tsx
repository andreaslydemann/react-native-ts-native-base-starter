import { HelloState, state } from "../state";

export enum ActionType {
  INCREMENT,
  DECREMENT,
}
export interface Action {
  type: ActionType,
  payload?: any
}

export const increment = (): Action => {
  return {
    type: ActionType.INCREMENT,
  }
}

export const decrement = (): Action => {
  return {
    type: ActionType.DECREMENT,
  }
}

const initialState = state;
export const reducer = (state: HelloState = initialState, action: Action): HelloState => {
  switch(action.type) {
    case ActionType.INCREMENT:
      return {
        ...state,
        number: ++state.number,
      }
    case ActionType.DECREMENT:
      return {
        ...state,
        number: --state.number,
      }
    default:
      return state;
  }
}
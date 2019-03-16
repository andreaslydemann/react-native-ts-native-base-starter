import IAction from "./interfaces/IAction";

export enum ActionType {
  INCREMENT,
  DECREMENT
}

export const increment = (): IAction<any> => {
  return {
    type: ActionType.INCREMENT
  };
};

export const decrement = (): IAction<any> => {
  return {
    type: ActionType.DECREMENT
  };
};

import IAction from "./interfaces/IAction";

export const COUNTER_TYPES = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT"
};

export const increment = (): IAction<any> => {
  return {
    type: COUNTER_TYPES.INCREMENT
  };
};

export const decrement = (): IAction<any> => {
  return {
    type: COUNTER_TYPES.DECREMENT
  };
};

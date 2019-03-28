import { Action } from "./interfaces";

export const COUNTER_TYPES = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT"
};

export const increment = (): Action<any> => {
  return {
    type: COUNTER_TYPES.INCREMENT
  };
};

export const decrement = (): Action<any> => {
  return {
    type: COUNTER_TYPES.DECREMENT
  };
};

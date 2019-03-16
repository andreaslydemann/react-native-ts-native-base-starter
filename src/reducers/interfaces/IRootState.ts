/*import {
    UserModel
} from '../models';*/

export interface IRootState {
  counter: CounterState;
}

export type CounterState = {
  value: number;
};

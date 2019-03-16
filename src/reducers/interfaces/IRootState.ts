/*import {
    UserModel
} from '../models';*/

export interface IRootState {
  counters: CounterState;
}

export type CounterState = {
  value: number;
};

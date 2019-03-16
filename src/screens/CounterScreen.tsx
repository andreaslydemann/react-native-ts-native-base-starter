import {
  AppPropConnectedDispatcher,
  AppPropConnectedState,
  AppComponent
} from "../components";
import { Dispatch } from "react";
import { connect } from "react-redux";
import { CounterState } from "../reducers/interfaces/IRootState";
import * as Actions from "../actions";
import IAction from "../actions/interfaces/IAction";

const mapDispatchToProps = (
  dispatch: Dispatch<IAction<any>>
): AppPropConnectedDispatcher => {
  return {
    handlePressIncrement: () => {
      return dispatch(Actions.increment());
    },
    handlePressDecrement: () => {
      return dispatch(Actions.decrement());
    }
  };
};

const mapStateToProps = (state: CounterState): AppPropConnectedState => ({
  number: state.value
});

export const HomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);

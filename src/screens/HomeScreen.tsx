import {
  AppPropConnectedDispatcher,
  AppPropConnectedState,
  AppComponent
} from "../components";
import { Dispatch } from "react";
import { connect } from "react-redux";
import { HelloState } from "../state";
import * as SampleModule from "../modules";

const mapDispatchToProps = (
  dispatch: Dispatch<SampleModule.Action>
): AppPropConnectedDispatcher => {
  return {
    handlePressIncrement: () => {
      return dispatch(SampleModule.increment());
    },
    handlePressDecrement: () => {
      return dispatch(SampleModule.decrement());
    }
  };
};

const mapStateToProps = (state: HelloState): AppPropConnectedState => ({
  number: state.number
});

export const HomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);

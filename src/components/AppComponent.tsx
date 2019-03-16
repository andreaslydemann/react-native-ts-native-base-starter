import React, { Dispatch } from "react";
import { CounterState } from "../reducers/interfaces/IRootState";
import { View, Button, Text, StyleSheet } from "react-native";
import IAction from "../actions/interfaces/IAction";
import * as Actions from "../actions";
import { connect } from "react-redux";
import i18n from "i18n-js";

/** models */
interface PropsConnectedState {
  value: number;
}
interface PropsConnectedDispatcher {
  handlePressIncrement: () => void;
  handlePressDecrement: () => void;
}

interface Props extends PropsConnectedState, PropsConnectedDispatcher {}

class AppComponent extends React.Component<any> {
  constructor(props: Props) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <View style={styles.container}>
        <Text>
          {i18n.t("foo")} {i18n.t("bar", { someValue: Date.now() })}
          -- {this.props.value}
        </Text>
        <Button title="increment" onPress={this.props.handlePressIncrement} />
        <Button title="decrement" onPress={this.props.handlePressDecrement} />
      </View>
    );
  }
}

const mapStateToProps = ({
  counter
}: {
  counter: CounterState;
}): PropsConnectedState => {
  return {
    value: counter.value
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<IAction<any>>
): PropsConnectedDispatcher => {
  return {
    handlePressIncrement: () => {
      return dispatch(Actions.increment());
    },
    handlePressDecrement: () => {
      return dispatch(Actions.decrement());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent as React.ComponentClass<Props>);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

import React, { Dispatch } from "react";
import { CounterState } from "../reducers/interfaces/IRootState";
import { Text, Button } from "native-base";
import { StyleSheet, View } from "react-native";
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

class Clicker extends React.Component<any> {
  constructor(props: Props) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <View>
        <Button
          transparent
          style={styles.button}
          onPress={this.props.handlePressIncrement}
        >
          <Text>{i18n.t("increment")}</Text>
        </Button>
        <Button
          transparent
          style={styles.button}
          onPress={this.props.handlePressDecrement}
        >
          <Text>{i18n.t("decrement")}</Text>
        </Button>
        <Button primary style={styles.button} onPress={this.props.showResult}>
          <Text>{i18n.t("showResult")}</Text>
        </Button>
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
)(Clicker as React.ComponentClass<Props>);

const styles = StyleSheet.create({
  button: { alignSelf: "center" }
});

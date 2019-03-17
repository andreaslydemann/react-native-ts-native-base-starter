import React from "react";
import { CounterState } from "../reducers/states";
import { Text } from "native-base";
import { StyleSheet, View } from "react-native";
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

class Result extends React.Component<any> {
  constructor(props: Props) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <View>
        <Text style={styles.text}>
          {i18n.t("number", { someValue: this.props.value })}
        </Text>
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

export default connect(
  mapStateToProps,
  null
)(Result as React.ComponentClass<Props>);

const styles = StyleSheet.create({
  text: {
    alignSelf: "center"
  }
});

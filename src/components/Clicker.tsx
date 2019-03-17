import React from "react";
import { Text, Button } from "native-base";
import { StyleSheet, View } from "react-native";
import i18n from "i18n-js";

interface Props {
  handlePressIncrement: () => void;
  handlePressDecrement: () => void;
  showResult: () => void;
}

export default class Clicker extends React.Component<Props> {
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

const styles = StyleSheet.create({
  button: { alignSelf: "center" }
});

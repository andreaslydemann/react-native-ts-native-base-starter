import React from "react";
import { Text } from "native-base";
import { StyleSheet, View } from "react-native";
import i18n from "i18n-js";

interface Props {
  value: number;
}

export default class Result extends React.Component<Props> {
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

const styles = StyleSheet.create({
  text: {
    alignSelf: "center"
  }
});

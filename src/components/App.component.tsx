import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import I18n from '../locale';

/** models */
export interface AppPropConnectedState {
  number: number;
}
export interface AppPropConnectedDispatcher {
  handlePressIncrement: () => void,
  handlePressDecrement: () => void
}
export interface AppProp extends AppPropConnectedState, AppPropConnectedDispatcher {};
export interface AppState {}

/** component */
export class AppComponent extends React.Component<AppProp, AppState> {
  constructor(props: AppProp) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <View style={styles.container}>
        <Text>{I18n.t('title')} {this.props.number}</Text>
        <Button title="increment" onPress={this.props.handlePressIncrement} />
        <Button title="decrement" onPress={this.props.handlePressDecrement} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

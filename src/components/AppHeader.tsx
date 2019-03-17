import React, { Component } from "react";
import { View, StatusBar, StyleSheet, Platform } from "react-native";
import { Body, Button, Header, Icon, Left, Right, Title } from "native-base";

interface Props {
  headerText: string;
  showBackButton?: boolean;
  leftButtonPress?: () => void;
}

export default class AppHeader extends Component<Props> {
  render() {
    return (
      <View style={styles.androidMargin}>
        <Header style={styles.headerBackground}>
          <StatusBar barStyle="light-content" />
          <Left>
            {this.props.showBackButton && (
              <Button transparent onPress={this.props.leftButtonPress}>
                <Icon style={styles.backButtonIcon} name="arrow-back" />
              </Button>
            )}
          </Left>
          <Body>
            <Title style={styles.title}>{this.props.headerText}</Title>
          </Body>
          <Right />
        </Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerBackground: {
    backgroundColor: "#03426A"
  },
  androidMargin: {
    ...Platform.select({
      android: {
        marginTop: 24
      }
    })
  },
  title: {
    color: "#fff",
    width: "100%"
  },
  backButtonIcon: {
    color: "#fff"
  }
});

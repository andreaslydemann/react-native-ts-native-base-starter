import { Clicker } from "../components";
import {
  Header,
  Title,
  Body,
  Left,
  Right,
  Content,
  Container
} from "native-base";
import { StyleSheet, StatusBar } from "react-native";
import React from "react";
import i18n from "i18n-js";

interface Props {
  navigation: any;
}

export class ClickerScreen extends React.Component<Props> {
  onShowResultPress = () => {
    this.props.navigation.navigate("ResultScreen");
  };

  render(): JSX.Element {
    return (
      <Container>
        <Header style={styles.header}>
          <StatusBar barStyle="light-content" />
          <Left />
          <Body>
            <Title style={styles.title}>{i18n.t("clickerHeader")}</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Clicker showResult={this.onShowResultPress} />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#03426A"
  },
  title: {
    color: "#fff"
  }
});

import { Result } from "../components";
import {
  Header,
  Title,
  Body,
  Left,
  Right,
  Content,
  Container,
  Button,
  Icon
} from "native-base";
import { StyleSheet, StatusBar } from "react-native";
import React from "react";
import i18n from "i18n-js";

interface Props {
  navigation: any;
}

export class ResultScreen extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <Container>
        <Header style={styles.header}>
          <StatusBar barStyle="light-content" />
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon style={styles.backButton} name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>{i18n.t("resultHeader")}</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Result />
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
  },
  backButton: { color: "#fff" }
});

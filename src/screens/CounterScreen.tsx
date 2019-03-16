import AppComponent from "../components/AppComponent";
import { Header, Title, Body, Container } from "native-base";
import { StyleSheet } from "react-native";
import React from "react";
import i18n from "i18n-js";

export class CounterScreen extends React.Component {
  render(): JSX.Element {
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: "#03426A" }}>
          <Body>
            <Title style={{ color: "#fff", width: "100%" }}>
              {i18n.t("foo")}
            </Title>
          </Body>
        </Header>
        <AppComponent />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

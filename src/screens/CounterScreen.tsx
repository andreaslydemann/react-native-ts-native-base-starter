import AppComponent from "../components/AppComponent";
import {
  Body,
  Button,
  Header,
  Icon,
  Left,
  Right,
  Title,
  Container,
  Label
} from "native-base";
import React from "react";

export class CounterScreen extends React.Component {
  render(): JSX.Element {
    return (
      <Container>
        <AppComponent />
      </Container>
    );
  }
}

import { Clicker, AppHeader } from "../components";
import { Content, Container } from "native-base";
import React from "react";
import i18n from "i18n-js";

interface Props {
  navigation: { navigate: (screen: string) => void };
}

export class ClickerScreen extends React.Component<Props> {
  onShowResultPress = () => {
    this.props.navigation.navigate("ResultScreen");
  };

  render(): JSX.Element {
    return (
      <Container>
        <AppHeader headerText={i18n.t("clickerHeader")} />
        <Content padder>
          <Clicker showResult={this.onShowResultPress} />
        </Content>
      </Container>
    );
  }
}

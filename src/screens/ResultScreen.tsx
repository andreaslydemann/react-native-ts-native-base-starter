import { Result, AppHeader } from "../components";
import { Content, Container } from "native-base";
import React from "react";
import i18n from "i18n-js";

interface Props {
  navigation: { navigate: (screen: string) => void; goBack: () => void };
}

export class ResultScreen extends React.Component<Props> {
  onLeftButtonPress = () => {
    this.props.navigation.goBack();
  };

  render(): JSX.Element {
    return (
      <Container>
        <AppHeader
          showBackButton={true}
          headerText={i18n.t("resultHeader")}
          leftButtonPress={this.onLeftButtonPress}
        />

        <Content padder>
          <Result />
        </Content>
      </Container>
    );
  }
}

import { Result, AppHeader } from "components";
import { Content, Container } from "native-base";
import { CounterState } from "reducers/states";
import React from "react";
import { connect } from "react-redux";
import i18n from "i18n-js";

interface PropsConnectedState {
  value: number;
}

interface Props extends PropsConnectedState {
  navigation: { goBack: () => void };
}

class ResultScreen extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

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
          <Result value={this.props.value} />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({
  counter
}: {
  counter: CounterState;
}): PropsConnectedState => {
  return {
    value: counter.value
  };
};

export default connect(
  mapStateToProps,
  null
)(ResultScreen as React.ComponentClass<Props>);

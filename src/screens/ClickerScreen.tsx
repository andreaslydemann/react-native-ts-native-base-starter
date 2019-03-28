import { Clicker, AppHeader } from "components";
import { Content, Container } from "native-base";
import { CounterState } from "reducers/states";
import { Action } from "actions/interfaces";
import * as Actions from "actions";
import React, { Dispatch } from "react";
import { connect } from "react-redux";
import i18n from "i18n-js";

interface PropsConnectedState {
  value: number;
}
interface PropsConnectedDispatcher {
  handlePressIncrement: () => void;
  handlePressDecrement: () => void;
}

interface Props extends PropsConnectedState, PropsConnectedDispatcher {
  navigation: { navigate: (screen: string) => void };
}

class ClickerScreen extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  onShowResultPress = () => {
    this.props.navigation.navigate("ResultScreen");
  };

  render(): JSX.Element {
    return (
      <Container>
        <AppHeader headerText={i18n.t("clickerHeader")} />
        <Content padder>
          <Clicker
            showResult={this.onShowResultPress}
            handlePressIncrement={this.props.handlePressIncrement}
            handlePressDecrement={this.props.handlePressDecrement}
          />
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

const mapDispatchToProps = (
  dispatch: Dispatch<Action<any>>
): PropsConnectedDispatcher => {
  return {
    handlePressIncrement: () => {
      return dispatch(Actions.increment());
    },
    handlePressDecrement: () => {
      return dispatch(Actions.decrement());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClickerScreen as React.ComponentClass<Props>);
